import express from "express";
import router from "./routes/index.js";

const app = express();

//definir puerto 
const port = process.env.PORT || 4000;

//habilitar pug
app.set("view engine", "pug");

//agregar router
app.use("/", router);

app.listen (port, () => {
    console.log(`Server corriendo en el puerto ${port}`);
});