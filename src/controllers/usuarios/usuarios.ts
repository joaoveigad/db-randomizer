import { Request, Response } from "express";
import prisma from "../../prisma";
import bcrypt from 'bcrypt'

export default class userController {

    async createUser(req: Request, res: Response): Promise<any>{
        const {email, senha} = req.body
        const senhaCripto = await bcrypt.hash(senha, 10)


        const emailExiste = await prisma.usuariosAutorizados.findUnique({
            where: { email }
        })

        if(emailExiste) {
            return res.status(400).json({message: 'E-mail já cadastrado.'})
        }
        
        const novoUsuario = await prisma.usuariosAutorizados.create({
            data: {
                email, 
                senha: senhaCripto
            }
        })

        return res.status(201).json({message: 'Usuário registrado com sucesso.', novoUsuario})
    }


}