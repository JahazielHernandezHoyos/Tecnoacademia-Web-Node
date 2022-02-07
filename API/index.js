import express from "express";
// import router from "./routes/index.js";

const app = express();

//definir puerto 
const port = process.env.PORT || 4000;

//agregar router
// app.use("/", router);

//Definir la carpeta publica
app.use(express.static("public"));

app.listen (port, () => {
    console.log(`Server corriendo en el puerto ${port}`);
});