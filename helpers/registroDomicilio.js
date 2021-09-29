import RegistroDomicilio from '../models/registroDomicilio.js'

const existeRegistroDomicilioByID = async ()=>{
    const existe = await Categoria.findById(id);

    if (!existe) throw new Error (`El ID no existe`);
}

export default existeRegistroDomicilioByID;