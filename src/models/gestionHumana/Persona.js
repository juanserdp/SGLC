import {Schema, model} from 'mongoose';

// tabla persona
const PersonaSchema = new Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    correoElectronico: {
        type: String,
        required: false
    },
    numeroIdentificacion: {
        type: Number,
        required: true
    },
    numeroTelefono: {
        type: Number,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: String,
        required: true
    }
},{collection: 'Personas'});

// exportacion del modelo
export default model('Persona', PersonaSchema);