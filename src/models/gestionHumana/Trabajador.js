import {Schema, model} from 'mongoose';

const TrabajadorSchema = new Schema({
    idPersona: {
        type: Schema.Types.ObjectId,
        ref: 'Persona',
        required: true
    },
    numeroTelefonoAcudiente: {
        type: Number,
        required: true
    },
},{collection: 'Trabajadores'});

export default model('Trabajador', TrabajadorSchema);