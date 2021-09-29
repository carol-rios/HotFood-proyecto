import Categoria from '../models/categoria.js'

const existeCategoriaByID = async ()=>{
    const existe = await Categoria.findById(id);

    if (!existe) throw new Error (`El ID no existe`);
}

export default existeCategoriaByID;