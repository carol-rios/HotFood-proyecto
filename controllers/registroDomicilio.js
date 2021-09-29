import RegistroDomicilio from '../models/registroDomicilio.js'
import bcryptjs from 'bcryptjs';
import {generarJWT} from '../middlewares/validar_jwt.js';

const RegistroDomicilioControllers={

    registroDomicilioGet: async (req,res)=> {
        const query = req.query.value;
        const registroDomicilio = await RegistroDomicilio.find({

            $or: [
                
                {Nombres: new RegExp(query, 'i')},
                {Apellidos: new RegExp(query, 'i')},
                {Telefono: new RegExp(query, 'i')},
                {Direccion: new RegExp(query, 'i')},
                {Email: new RegExp(query, 'i')},
           
            ]
            
        });

        res.json ({
            registroDomicilio
        })
    },

    registroDomicilioGetByid: async (req,res)=> {
    
        const {id} = req.params;
        const registroDomicilio = await RegistroDomicilio.findById(id);

        res.json({
        registroDomicilio
    })
},

    registroDomicilioPost: async (req, res)=> {
        const { Nombres, Apellidos, Telefono, Direccion, Email} = req.body;
        const registroDomicilio = RegistroDomicilio({ Nombres, Apellidos, Telefono, Direccion, Email});

        const salt = bcryptjs.genSaltSync();

        registroDomicilio.save();

        res.json({
            registroDomicilio
        })
    },

    registroDomicilioPut: async (req,res)=> {
        const {id} = req.params;
        const {_id, Email, createAt, estado, __v, ...resto}=req.body;


        const registroDomicilio = await RegistroDomicilio.findByIdAndUpdate(id, resto);

        res.json({
            registroDomicilio
        })
    },
   registroDomicilioPutActivar: async (req,res)=>  {
        const {id} = req.params;

        const registroDomicilio = await RegistroDomicilio.findByIdAndUpdate(id, {estado:1});

        res.json({
            registroDomicilio
        })
    },

    registroDomicilioPutDesactivar: async (req,res)=>  {
        const {id} = req.params;

        const registroDomicilio = await RegistroDomicilio.findByIdAndUpdate(id, {estado:0});

        res.json({
            registroDomicilio
        })
    },

    registroDomicilioDelete: async (req,res)=> {
        const {id} = req.params
        const registroDomicilio = await RegistroDomicilio.findByIdAndDelete(id);
        
        res.json ({
            registroDomicilio
        })
    }
} 
    export default RegistroDomicilioControllers;