import express from "express";
const router = express.Router();
import { registrar, perfil } from "../controllers/administradorController.js";

router.post("/", registrar);

router.get("/perfil", perfil); 

export default router;