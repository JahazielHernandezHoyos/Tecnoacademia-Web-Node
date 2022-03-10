import express from "express";
import dotenv from "dotenv"
import conectarDB from "./config/db.js";
import administradoresRoutes from "./routes/administradorRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();

console.log(process.env.MONGO_URI)
conectarDB();

app.use("/api/administradores", administradoresRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log("Servidor iniciado en el puerto " + PORT);
})