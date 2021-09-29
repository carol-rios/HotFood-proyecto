
import mongoose from "mongoose";

const pedidoSchema = mongoose.Schema({
  
   Valor_total: { type:Number, default: 0 },
   detalles:[{
      producto:{type: mongoose.Schema.Types.ObjectId,ref:'Menu',required:true},
      Cantidad: { type:Number, requered: true },
            }],
   Descripcion: {  type:String},
   id_domicilio:{type: mongoose.Schema.Types.ObjectId,ref:'RegistroDomicilio',required:true}, //no modifica
})

export default mongoose.model('Pedido',pedidoSchema) 