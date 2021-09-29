import Pedido from '../models/pedido.js'

import mongoose  from 'mongoose'
// import  Categoria from '../models/categoria.js'
// import Pedido from '../models/pedido.js'
// import Usuario from '../models/usuario.js'
// //import {existeArticuloByIdBool} from '../helpers/articulo.js'


const existePedidoByID = async ()=>{
    const existe = await Pedido.findById(id);

    if (!existe) throw new Error (`El ID no existe`);
}


// //FACTURA, NOTA DEBITO,NOTA CREDITO
// const existeTipoComprobante =  async (tipoComprobante) =>{
//     if (tipoComprobante != "FACTURA")  {
//         if (tipoComprobante != "NOTA DEBITO") {
//             if (tipoComprobante != "NOTA CREDITO") {
//                 throw new Error(`solo FACTURA, NOTA DEBITO,NOTA CREDITO`)
//             }
//         }
//     }
// }
// const personaActiva = async (persona)=>{
//     const personaActiva = await Persona.findOne({_id:persona})
//     if (personaActiva.estado === 0) {throw new Error('Persona desactivada')}
//     if (personaActiva.tipoPersona !== "proveedor") {throw new Error('Solo proveedores')}
// }
// const existeCompraById = async (id) =>{
//     const existe = await Compra.findById(id)
//     if(!existe) throw new Error('No existe compra con ese ID')
// }
// //recibir el id del articulo que va a modificar y la cantidad que va a sumar 
// const aumentarStock = async (_id,cantidad) =>{
//     let {stock} = await Articulo.findById(_id);
//     stock = parseInt(stock) + parseInt(cantidad)
//     await Articulo.findByIdAndUpdate({_id},{stock})
// }
// const disminuirStock = async (_id,cantidad) =>{
//     let {stock} = await Articulo.findById(_id);
//     stock = parseInt(stock) - parseInt(cantidad)
//     await Articulo.findByIdAndUpdate({_id},{stock})
// }
// const validarArticuloDetalle=async(detalles)=>{
//     //RECORRER EL ARRAY
//     for(let detalle of detalles){
//         //evaluar si es un id
//         if(mongoose.Types.ObjectId.isValid(detalle._id)){
//             //
//             const existe=await existeArticuloByIdBool(detalle._id)
//             if(!existe) throw new Error (`El id ${detalle._id} no existe`)
//         }else throw new Error (`El id ${detalle._id} no es válido`)
//     }

// }
// export {existeTipoComprobante, personaActiva, existeCompraById, aumentarStock, disminuirStock,validarArticuloDetalle}

export default existePedidoByID;