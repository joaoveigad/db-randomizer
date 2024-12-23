import { Router } from "express";
import NameController from "./controllers/randomizer/randomize";
import managerRegistros from "./controllers/randomizer/register";
import userController from "./controllers/usuarios/usuarios";
import authmid from "./mdw/auth";


export const routes = Router();




routes.get('/nome', new NameController().randomizeName)
routes.post('/users', new userController().createUser)
routes.post('/login', new userController().login)
routes.use(authmid)
routes.post('/add', new managerRegistros().create)
