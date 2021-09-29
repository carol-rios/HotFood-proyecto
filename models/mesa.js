import mongoose from "mongoose";

const MesasSchema = mongoose.Schema({

    CantMesas: { type: String, required: true, maxlength: 35 },
    NumMesas: { type: String, required: true, maxlength: 25, unique: true },

    CreatedAt: { type: Date, default: Date.now }//NO SE MODIFICA

})

export default mongoose.model('Mesa', MesasSchema) 