import Pedido from '../models/pedido.js'
import Domicilios from '../models/registroDomicilio.js';

const validarPedios = {
    // clidar id que exista 
    domiciliosId: async(id) => {
        const existe = await Domicilios.findById(id);
        if (!existe) { throw new Error(`el Id ingresado no coresponde a nugun registro`) }
    },

    existePedidoByID: async() => {
            const existe = await Pedido.findById(id);
            if (!existe) throw new Error(`El ID no existe`);
        }
        // para valiafdar que un camo sea unico
        // numeroDocuemnto: async(numeroDocuemnto) => {
        //     const existe = await Estudiantes.findOne({ numeroDocuemnto });
        //     if (existe) { throw new Error('El numero de indentificacion ya esta regitrada') }
        // },
}


export default validarPedios;