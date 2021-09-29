import Pedido from '../models/pedido.js'

const PedidoControllers ={
pedidoPost: async (req,res)=> {
        const {Cantidad,Valor_total,Descripcion} = req.body;
        const pedido = Pedido({Cantidad,Valor_total,Descripcion});

        pedido.save();

        res.json({
           pedido
        })
    },
         
        pedidoGet: async (req,res)=> {
            const query = req.query.value;
            const pedido = await Pedido.find({
    
                $or: [
                    {Cantidad: new RegExp(query, 'i')},
                    {Valor_total: new RegExp(query, 'i')},
                    {Descripcion: new RegExp(query, 'i')}
                ]
                
            }).populate({path:'id_domicilio',select:['Nombres',]})
            detalles.map((producto))
    
            res.json ({
                pedido
            })
        },

        pedidoGetByid: async (req,res)=> {
            
                const {id} = req.params;
                const pedido = await Pedido.findById(id);
        
                res.json({
                pedido
            })
        },
        pedidoPut: async (req,res)=> {
            const {id} = req.params;
            const {_id, Valor_total, ...resto}=req.body;
    
            const pedido = await Pedido.findByIdAndUpdate(id, resto);
    
            res.json({
                pedido
            })
        },

        pedidoDelete: async (req,res)=> {
            const {id} = req.params
            const pedido = await Pedido.findByIdAndDelete(id);
            
            res.json ({
                pedido
            })
        }

}

export default PedidoControllers