import { Router } from "express";
import NameController from "./controllers/getName";


export const routes = Router();

routes.get('/nome', new NameController().createNome)

