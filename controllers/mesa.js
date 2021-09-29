import Mesa from '../models/mesa.js'

const MesasControllers = {

    mesaPost: async (req, res) => {
        const { CantMesas, NumMesas } = req.body;
        const mesa = Mesa({ CantMesas, NumMesas });

        mesa.save();

        res.json({
            mesa
        })
    },

    mesaGet: async (req, res) => {
        const query = req.query.value;
        const mesa = await Mesa.find({

            $or: [

                { CantMesas: new RegExp(query, 'i') },
                { NumMesas: new RegExp(query, 'i') },

            ]

        });

        res.json({
            mesa
        })
    },

    mesaGetById: async (req, res) => {

        const { id } = req.params;
        const mesa = await Mesa.findById(id);

        res.json({
            mesa
        })
    },

    mesaPut: async (req, res) => {
        const { id } = req.params;
        const { _id, CreatedAt, ...resto } = req.body;

        const mesa = await Mesa.findByIdAndUpdate(id, resto);

        res.json({
            mesa
        })
    },

    mesaDelete: async (req, res) => {
        const { id } = req.params
        const mesa = await Mesa.findByIdAndDelete(id);

        res.json({
            mesa
        })
    }

}

export default MesasControllers
