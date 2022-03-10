import mongoose from "mongoose";

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
    },
    confirmado: {
        type: Boolean,
        default: false,
    }
});

const Administradores = mongoose.model('Administradores', administradoresSchema);
export default Administradores;