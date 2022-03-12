import mongoose from "mongoose";
import generarId from "../helpers/generarId.js";

const administradoresSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String, 
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    rol: {
        type: String,
        required: true,
        trim: true
    },
    token: {
        type: String,
        default: generarId(),
    },
    confirmado: {
        type: Boolean,
        default: false,
    }
});

administradoresSchema.methods.comprobarPassword = async function() {
    return 
}

const Administradores = mongoose.model('Administradores', administradoresSchema);
export default Administradores;