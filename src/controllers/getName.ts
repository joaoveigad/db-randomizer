import { Request, Response } from "express";
import prisma from "../prisma";

export async function nomeRandom() {
    const nomeDriver = await prisma.$queryRaw<any[]>`
        SELECT 
            (SELECT prefixo FROM "decomposedNames" ORDER BY RANDOM() LIMIT 1) AS pre,
            (SELECT fill FROM "decomposedNames" ORDER BY RANDOM() LIMIT 1) AS mid,
            (SELECT sufixo FROM "decomposedNames" ORDER BY RANDOM() LIMIT 1) AS su
    `;
    const nomeConcatenado = nomeDriver[0].pre + nomeDriver[0].mid + nomeDriver[0].su

    console.log(nomeConcatenado)
}

nomeRandom()