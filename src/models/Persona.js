import {Schema, model} from 'mongoose';

const PersonaSchema = new Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String
    },
    numeroIdentificacion: {
        type: Number,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    numeroTelefono: {
        type: Number,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true
    }
},{collection: 'Personas'});

export default model('Persona', PersonaSchema);