import { Request, Response } from "express";
import prisma from "../prisma";


export default class NameController {
    async createNome(req: Request, res: Response): Promise<void> {
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



// export const obterNome = async (req: Request, res: Response): Promise<void> => {
//     const { resposta } = req.body;

//     try {
//         if (resposta.toLowerCase() === 'sim') {
//             const nomeDriver = await prisma.$queryRaw<any[]>`
//                 SELECT 
//                     (SELECT prefixo FROM "decomposedNames" ORDER BY RANDOM() LIMIT 1) AS pre,
//                     (SELECT fill FROM "decomposedNames" ORDER BY RANDOM() LIMIT 1) AS mid,
//                     (SELECT sufixo FROM "decomposedNames" ORDER BY RANDOM() LIMIT 1) AS su
//             `;
//             const nomeConcatenado = nomeDriver[0].pre + nomeDriver[0].mid + nomeDriver[0].su;
//             res.status(200).json(nomeConcatenado);
//         } else {
//             throw new Error('Resposta não válida!');
//         }

//     } catch (error) {
//         console.error(error);
//         res.status(400).json({ message:'Algo deu errado!' });
//     }
// };
