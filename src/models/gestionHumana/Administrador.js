import {Schema, model} from 'mongoose';

const AdministradorSchema = new Schema({
    idPersona: {
        type: Schema.Types.ObjectId,
        ref: 'Persona',
        required: true
    },
    contrasena: {
        type: String,
        required: true
    }
},{collection: 'Administradores'});

// exportacion del modelo
export default model('Administrador', AdministradorSchema);