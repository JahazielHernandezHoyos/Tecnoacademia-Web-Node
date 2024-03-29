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

const confirmar = async (req, res) => {
    const { token } = req.params;

    const usuarioConfirmar = await Administradores.findOne({ token });
    if(!usuarioConfirmar) {
        const error = new Error("Token no valido");
        return res.status(404).json({ msg: error.message });
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save()
        res.json({msg:"Usuario confirmado correctamente"});
    } catch (error) {
        console.log(error);
    }
}

const autenticar = async (req, res) => {
    const {email } = req.body;

    // comprobar si el usuario existe
    const usuario = await Administradores.findOne({ email });

    if (!usuario) {
        const error = new Error("El Usuario no existe");
        return res.status(404).json({msg: error.message});
    }

    // comprobar si el usuario esta confirmado
    if (!usuario.confirmado) {
        const error = new Error("Tu cuenta no ha sido confirmada");
        return res.status(403).json({msg: error.message});
    }

    // autenticar al usuario
    
    
}; 

export {
    registrar,
    perfil,
    confirmar,
    autenticar
}