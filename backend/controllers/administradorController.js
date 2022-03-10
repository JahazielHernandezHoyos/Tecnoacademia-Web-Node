import Administradores from "../models/administradores.js";

const registrar = async (req, res) => {
    const { email } = req.body;

    // Prevenir usuarios duplicados
    const existeUsuario = await Administradores.findOne({ email });
    
    if (existeUsuario) {
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({ msg: error.message });
    } 
        try {
        //Guardar un nuevo administradores
        const administrador = new Administradores(req.body);
        const administradorGuardado = await administrador.save();

        res.json(administradorGuardado);
    } catch (error) {
        console.log(error);
    }
}

const perfil = (req, res) => {
    res.json({msg:"Mostrando perfil"});
}

export {
    registrar,
    perfil
}