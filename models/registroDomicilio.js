import mongoose from "mongoose";

const RegisDomicilioSchema=mongoose.Schema({  

    Nombres:{type:String,required:true,maxlength:35}, 
    Apellidos:{type:String,required:true,maxlength:25},
    Telefono:{type:String,required:true,maxlength:10}, 
    Direccion:{type:String,required:true,maxlength:40},
    Email:{type:String,required:true,maxlength:25,unique:true},
    estado: {type:Number,default:1,required:true,maxlenght:50},
    
    createdAt:{type:Date,default:Date.now}//NO SE MODIFICA
    }) 
 export default mongoose.model('RegistroDomicilio',RegisDomicilioSchema)  