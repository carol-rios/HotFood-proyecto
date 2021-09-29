import Pedido from '../models/pedido.js'

const PedidoControllers = {
    pedidoPost: async(req, res) => {
        const { Valor_total, Descripcion, id_domicilio, detalles } = req.body;

        const pedido = Pedido({ Valor_total, Descripcion, id_domicilio, detalles });

        pedido.save();

        res.json({
            pedido
        })
    },

    pedidoGet: async(req, res) => {
        const query = req.query.value;
        const pedido = await Pedido.find({

                $or: [
                    { Descripcion: new RegExp(query, 'i') }
                ]

            }).populate({ path: 'id_domicilio', select: ['Nombres', 'Apellidos', 'Telefono', 'Direccion'] })
            .populate({ path: 'detalles.producto', select: ['Nombre', 'Precio'] })


        res.json({
            pedido
        })
    },

    pedidoGetByid: async(req, res) => {

        const { id } = req.params;
        const pedido = await Pedido.findById(id);

        res.json({
            pedido
        })
    },
    pedidoPut: async(req, res) => {
        const { id } = req.params;
        const { _id, CreatedAt, ...resto } = req.body;

        const pedido = await Pedido.findByIdAndUpdate(id, resto);

        res.json({
            pedido
        })
    },

    pedidoDelete: async(req, res) => {
        const { id } = req.params
        const pedido = await Pedido.findByIdAndDelete(id);

        res.json({
            pedido
        })
    }

}

export default PedidoControllers