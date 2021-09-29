import Reservas from '../models/reservas.js'

const ReservasControllers ={

    reservasPost: async (req,res)=> {
        const {Nombres, Email, Telefono} = req.body;
        const reservas = Reservas({Nombres, Email, Telefono});

        reservas.save();

        res.json({
           reservas
        })
    },
         
        reservasGet: async (req,res)=> {
            const query = req.query.value;
            const reservas = await Reservas.find({
    
                $or: [
                    {Nombres: new RegExp(query, 'i')},
                    {Email: new RegExp(query, 'i')},
                    {Telefono: new RegExp(query, 'i')}
                
                ]
                
            });
    
            res.json ({
                reservas
            })
        },
        reservasGetById: async (req, res) => {
            
                    const { id } = req.params;
                    const reservas = await Reservas.findById(id);
            
                    res.json({
                        reservas
                    })
                },
    

        reservasPut: async (req,res)=> {
            const {id} = req.params;
            const {_id, CreatedAt, ...resto}=req.body;
    
            const reservas = await Reservas.findByIdAndUpdate(id, resto);
    
            res.json({
                reservas
            })
        },
        reservasDelete: async (req,res)=> {
            const {id} = req.params
            const reservas = await Reservas.findByIdAndDelete(id);
            
            res.json ({
                reservas
            })
        }

}

export default ReservasControllers
