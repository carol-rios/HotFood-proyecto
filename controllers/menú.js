import Menu from '../models/menú.js'

const MenuControllers ={

    menuPost : async (req,res)=> {
        const {Nombre, Categoria, Precio, Descripcion } = req.body;
        const menu= Menu({Nombre, Categoria, Precio, Descripcion });

        menu.save();

        res.json({
           menu
        })
    },

    menuGet: async (req,res)=> {
        const query = req.query.value;
        const menu = await Menu.find({

            $or: [
                {Nombre: new RegExp(query, 'i') },
                {Categoria: new RegExp(query, 'i') },
                {Precio: new RegExp(query, 'i') },
                {Descripcion: new RegExp(query, 'i') }
            
            ]
            
        });

        res.json ({
            menu
        })
    },

    menuGetByid: async (req, res) => {
        
                const { id } = req.params;
                const menu = await Menu.findById(id);
        
                res.json({
                    menu
                })
            },

        menuPut: async (req,res)=> {
        const {id} = req.params;
        const {_id, __v, Categoria,CreatedAt, ...resto}=req.body;

        const menu = await Menu.findByIdAndUpdate(id, resto);

        res.json({
            menu
        })
    },

    menuDelete: async (req,res)=> {
        const {id} = req.params
        const menu = await Menu.findByIdAndDelete(id);
        
        res.json ({
            menu
        })
    }

}
     export default MenuControllers