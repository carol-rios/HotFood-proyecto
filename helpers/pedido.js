import Pedido from '../models/pedido.js'

import mongoose  from 'mongoose'

const existePedidoByID = async ()=>{
    const existe = await Pedido.findById(id);

    if (!existe) throw new Error (`El ID no existe`);
}

export default existePedidoByID;