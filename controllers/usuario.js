import Usuario from '../models/usuario.js';
import bcryptjs from 'bcryptjs';
import { generarJWT } from '../middlewares/validar_jwt.js';

const UsuarioControllers = {
    usuarioGet: async (req, res) => {
        const query = req.query.value;
        const usuarios = await Usuario.find({

            $or: [
                { Nombre: new RegExp(query, 'i') },
                { Email: new RegExp(query, 'i') },
                { Rol: new RegExp(query, 'i') }
            ]

        });

        res.json({
            usuarios
        })
    },

    usuarioGetByid: async (req, res) => {

        const { id } = req.params;
        const usuario = await Usuario.findById(id);

        res.json({
            usuario
        })
    },

    usuarioPost: async (req, res) => {
        const { Nombre, Email, Password, Rol } = req.body;
        const usuario = Usuario({ Nombre, Email, Password, Rol });

        const salt = bcryptjs.genSaltSync();
        // usuario.Password=bcryptjs.hashSync(Password,salt);
        usuario.Password = bcryptjs.hashSync(Password, salt);
        usuario.save();
 
        res.json({
            usuario
        })
    },

    login: async (req, res) => {
        const { Email, Password } = req.body;

        const usuario = await Usuario.findOne({ Email })
        if (!usuario) {
            return res.status(404).json({
                msg: 'Usuario/Password no encontrado "email"'
            })
        }
        if (usuario.estado === 0) {
            return res.status(404).json({
                msg: 'Usuario/Password no encontrado "estado"'
            })
        }
        const validarPassword = bcryptjs.compareSync(Password, usuario.Password);
        if (!validarPassword) {
            return res.status(404).json({ 
                msg: 'Usuario/Password no encontrado "password"'
            })
        }

        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });
    },

    // usuarioPut: async (req,res)=> {
    usuarioPut: async (req, res) => {
        const { id } = req.params;
        const { _id, Email, CreateAt, Estado, __v, Rol, Password, ...resto } = req.body;

        if (Password) {
            const salt = bcryptjs.genSaltSync();
            resto.Password = bcryptjs.hashSync(Password, salt);
        }

        const usuario = await Usuario.findByIdAndUpdate(id, resto);

        res.json({
            usuario
        })
    },

    usuarioPutActivar: async (req, res) => {
        const { id } = req.params;

        const usuario = await Usuario.findByIdAndUpdate(id, { Estado: 1 });

        res.json({
            usuario
        })
    },

    usuarioPutDesactivar: async (req, res) => {
        const { id } = req.params;

        const usuario = await Usuario.findByIdAndUpdate(id, { Estado: 0 });

        res.json({
            usuario
        })
    },

    usuarioDelete: async (req, res) => {
        const { id } = req.params
        const usuario = await Usuario.findByIdAndDelete(id);

        res.json({
            usuario
        })
    }
}

export default UsuarioControllers;