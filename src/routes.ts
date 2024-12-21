import { Router } from "express";
import NameController from "./controllers/randomizer/randomize";
import managerRegistros from "./controllers/randomizer/register";
import userController from "./controllers/usuarios/usuarios";


export const routes = Router();

routes.get('/nome', new NameController().randomizeName)
routes.post('/add', new managerRegistros().create)
routes.post('/users', new userController().createUser)
routes.post('/login', new userController().login)
