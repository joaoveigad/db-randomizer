import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import 'dotenv/config';

const authmid = (req: Request, res: Response, next: NextFunction): void => {
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(401).json({ message: 'Não autenticado!' });
        return;
    }

    const token = authorization.split(' ')[1];

    try {
        jwt.verify(token, process.env.SECRET_JWT as string);
        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            res.status(403).json({ message: 'Token expirado.' });
        } else {
            res.status(403).json({ message: 'Erro na validação do token.' });
        }
    }
};

export default authmid;
