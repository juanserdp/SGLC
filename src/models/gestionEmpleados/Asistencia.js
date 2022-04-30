import {Schema, model} from 'mongoose';

const AsistenciaSchema = new Schema({
    idBalanceSemanal: {
        type: Schema.Types.ObjectId,
        ref: 'BalanceSemanal',
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true
    },
    asistio: {
        type: Boolean,
        required: true
    },
    actividades: {
        type: [String],
        required: true
    },
    horaIngreso: {
        type: Date,
        required: true
    },
    horaSalida: {
        type: Date,
        required: true
    },
    observaciones: {
        type: String,
        required: true
    },
},{collection: 'Asistencias'});

export default model('Asistencia', AsistenciaSchema);