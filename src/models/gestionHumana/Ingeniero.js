import {Schema, model} from 'mongoose';

const IngenieroSchema = new Schema({
    idPersona: {
        type: Schema.Types.ObjectId,
        ref: 'Persona',
        required: true
    },
    numeroTelefonoAcudiente: {
        type: Number,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    }
},{collection: 'Ingenieros'});

// exportacion del modelo
export default model('Ingeniero', IngenieroSchema);