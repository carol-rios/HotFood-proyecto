import mongoose from "mongoose";

const CategoriaSchema= mongoose.Schema({
    Nombre:{type:String,required:true,maxlength:45,unique:true},
    CreateAt:{type:Date,default:Date.now}
})

export default mongoose.model('Categoria',CategoriaSchema)