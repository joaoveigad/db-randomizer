import { Router } from "express";
import NameController from "./controllers/randomize";
import managerRegistros from "./controllers/register";


export const routes = Router();

routes.get('/nome', new NameController().randomizeName)

routes.post('/add', new managerRegistros().create)
