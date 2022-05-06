import {Schema, model} from 'mongoose';

const ActividadSchema = new Schema({
    nombreActividad: {
        type: String,
        required: true
    },
    precioActividad: {
        type: Number,
        required: true
    },
    porcentajeDescuento: {
        type: Number,
        required: true
    },
},{collection: 'Actividades'});

export default model('Actividad', ActividadSchema);