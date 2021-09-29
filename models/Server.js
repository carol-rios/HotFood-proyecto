import express from 'express';
import cors from 'cors';
import dbConection from '../database/config.js';

import categoria from '../routes/categoria.js'
import menu from '../routes/menú.js'
import pedido from '../routes/pedido.js'
import registroDomicilio from '../routes/registroDomicilio.js'
import reservas from '../routes/reservas.js'
import usuario from '../routes/usuario.js'
import mesa from '../routes/mesa.js'

class Server{
    constructor(){
        
        this.port= process.env.PORT

        this.app = express();

        this.conectarBD();

        this.middlewares();

        this.routes();
    }

    routes(){
        
        this.app.use('/api/categoria',  categoria);
        this.app.use('/api/menu',  menu);
        this.app.use('/api/pedido',  pedido);
        this.app.use('/api/registroDomicilio',  registroDomicilio);
        this.app.use('/api/reservas',  reservas);
        this.app.use('/api/usuario',  usuario);
        this.app.use('/api/mesa', mesa);
      
    }

    async conectarBD(){
      await dbConection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}

export default Server;



