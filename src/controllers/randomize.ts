import { Request, Response } from "express";
import prisma from "../prisma";


export default class NameController {
    async randomizeName(req: Request, res: Response): Promise<void> {
        try {
            const nomeDriver = await prisma.$queryRaw<any[]>`
                SELECT 
                    (SELECT prefixo FROM "decomposedNames" ORDER BY RANDOM() LIMIT 1) AS pre,
                    (SELECT fill FROM "decomposedNames" ORDER BY RANDOM() LIMIT 1) AS mid,
                    (SELECT sufixo FROM "decomposedNames" ORDER BY RANDOM() LIMIT 1) AS su
            `;
            const nomeConcatenado: string = nomeDriver[0].pre + nomeDriver[0].mid + nomeDriver[0].su;
            res.status(200).json({ nome: nomeConcatenado });
            
        } catch (error) {
            res.status(400).json({message: 'Erro desconhecido!'})
        }
    }
}
