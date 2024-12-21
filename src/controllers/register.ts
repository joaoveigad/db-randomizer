import { Request, Response, response } from "express";
import prisma from "../prisma"

export default class ManagerRegistros {
    async create(req: Request, res: Response): Promise<any> {
        const { nome, prefixo, fill, sufixo } = req.body;

        try {
            const nomeExiste = await prisma.decomposedNames.findUnique({
                where: { nome }
            });

            if (nomeExiste) {
                return res.status(400).json({
                    message: 'Nome já cadastrado!'
                });
            }

            const novoNome = await prisma.decomposedNames.create({
                data: { nome, prefixo, fill, sufixo }
            });

            return res.status(201).json(novoNome);
        } catch (error) {
            const erro = error as Error;
            return res.status(400).json({ message: erro.message });
        }
    }
}