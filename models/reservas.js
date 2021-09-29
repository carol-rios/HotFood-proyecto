import mongoose from "mongoose";

const ReservasSchema = mongoose.Schema({

    Nombres: { type: String, required: true, maxlength: 35 },
    Email: { type: String, required: true, maxlength: 25, unique: true },
    Telefono: { type: String, required: true, maxlength: 10 }, 
    Fecha: { type: Date, required: true },
  //  Hora: { type: time },   

    CreatedAt: { type: Date, default: Date.now }//NO SE MODIFICA

})

export default mongoose.model('Reservas', ReservasSchema)