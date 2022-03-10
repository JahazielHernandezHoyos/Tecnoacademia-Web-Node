import express from "express";
const router = express.Router();
import { registrar, perfil, confirmar } from "../controllers/administradorController.js";

router.post("/", registrar);

router.get("/perfil", perfil); 

router.get("/confirmar/:token", confirmar)

export default router;