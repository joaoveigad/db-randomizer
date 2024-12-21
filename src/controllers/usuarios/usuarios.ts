import { Request, Response } from "express";
import prisma from "../../prisma";
import bcrypt from 'bcrypt'

export default class userController {

    async createUser(req: Request, res: Response): Promise<any>{
        const {email, senha} = req.body
        const senhaCripto = await bcrypt.hash(senha, 10)

        try {
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
            
        } catch (error) {
            const erro = error as Error;
            return res.status(400).json({ message: erro.message });
        }

    }


    async login(req:Request, res: Response): Promise<any>{
        const {email, senha} = req.body;
        
        if (!email || !senha){
            return res.status(400).json({ message: 'Campos de usuário e senha obrigatórios.'})
        }

        try {
            const usuarioValido = await prisma.usuariosAutorizados.findUnique({
                where: { email }
            });

            if (!usuarioValido) {
                return res.status(400).json({ message: 'Credenciais incorretas.' });
            }
            
            const senhaVerificada = await bcrypt.compare(senha, usuarioValido.senha);
            
            if (!senhaVerificada) {
                return res.status(400).json({ message: 'Credenciais incorretas.' });
            }
            return res.status(200).json({message: 'Login bem-sucedido.'})


        } catch (error) {
            const erro = error as Error;
            return res.status(400).json({ message: erro.message });
        }







    }


}