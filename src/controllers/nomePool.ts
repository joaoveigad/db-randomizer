// controllers/nameController.ts
import { Request, Response } from "express";
import pool from "../pg";  // Importando o pool de conexões ao banco de dados

export default class nameController {
    // Método para listar um nome concatenado aleatório
    async list(req: Request, res: Response) {
        try {
            // Consultando o banco para gerar um nome aleatório
            const result = await pool.query(`
                SELECT 
                    (SELECT prefixo FROM "decomposedNames" ORDER BY RANDOM() LIMIT 1) AS pre,
                    (SELECT fill FROM "decomposedNames" ORDER BY RANDOM() LIMIT 1) AS mid,
                    (SELECT sufixo FROM "decomposedNames" ORDER BY RANDOM() LIMIT 1) AS su
            `);

            // Concatenando os resultados
            const nomeDriver = result.rows;
            const nomeConcatenado = nomeDriver[0].pre + nomeDriver[0].mid + nomeDriver[0].su;

            // Retornando o nome concatenado
            return res.status(200).json({ nome: nomeConcatenado });
        } catch (error) {
            // Se houver erro, retornamos uma resposta 400 com mensagem de erro
            return res.status(400).json({ message: 'Erro ao gerar nome aleatório'});
        }
    }
}
