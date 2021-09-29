import mongoose from "mongoose"

const MenuSchema=mongoose.Schema({

Nombre:{type:String,required:true,maxlength:45}, 
Categoria:{type:mongoose.Schema.Types.ObjectId,ref:'Categoria',require:true},
Precio:{type:Number, required:true,maxlength:20}, 
Descripcion:{type:String,required:true,maxlength:200}, 

CreatedAt:{type:Date,default:Date.now}//NO SE MODIFICA
})
export default mongoose.model('Menu',MenuSchema)   