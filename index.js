const express = require('express');

const app = express();

//definir puerto 
const port = process.env.PORT || 4000;

app.listen (port, () => {
    console.log(`Server corriendo en el puerto ${port}`);
});