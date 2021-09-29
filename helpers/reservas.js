import Reservas from '../models/reservas.js'

const existeReservasByID = async ()=>{
    const existe = await Registro.findById(id);

    if (!existe) throw new Error (`El ID no existe`);
}

export default existeReservasByID;