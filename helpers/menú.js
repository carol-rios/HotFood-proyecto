import Menu from '../models/menú.js'

const existeMenuByID = async ()=>{
    const existe = await Menu.findById(id);

    if (!existe) throw new Error (`El ID no existe`);
}

export default existeMenuByID;