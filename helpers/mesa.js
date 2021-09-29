import Mesas from '../models/mesa.js'

const existeMesasByID = async ()=>{
    const existe = await Registro.findById(id);

    if (!existe) throw new Error (`El ID no existe`);
}

export default existeMesasByID;