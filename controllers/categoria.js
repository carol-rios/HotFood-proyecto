import Categoria from '../models/categoria.js'

const CategoriaControllers = {

    categoriaPost: async(req, res) => {
        const { Nombre } = req.body;
        const categoria = new Categoria({ Nombre });

        categoria.save();

        res.json({
            categoria
        })
    },

    categoriaGet: async(req, res) => {
        const query = req.query.value;
        const categoria = await Categoria.find()

        res.json({
            categoria
        })
    },

    categoriaPut: async(req, res) => {
        const { id } = req.params;
        const { _id, __v, createAt, ...resto } = req.body;

        const categoria = await Categoria.findByIdAndUpdate(id, resto);

        res.json({
            categoria
        })
    },

    categoriaDelete: async(req, res) => {
        const { id } = req.params
        const categoria = await Categoria.findByIdAndDelete(id);

        res.json({
            categoria
        })
    }

}

export default CategoriaControllers