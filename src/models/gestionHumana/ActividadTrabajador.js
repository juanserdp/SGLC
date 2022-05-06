import {Schema, model} from 'mongoose';

const ActividadTrabajadorSchema = new Schema({
    idActividad: {
        type: Schema.Types.ObjectId,
        ref: 'Actividad',
        required: true
    },
    idPlanillaSemanal: {
        type: Schema.Types.ObjectId,
        ref: 'PlanillaSemanal',
        required: true
    },
    idIngeniero: {
        type: Schema.Types.ObjectId,
        ref: 'Ingeniero',
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true
    },
    fechaPeso: {
        type: Date,
        required: true
    },
    horaCreacion: {
        type: Date,
        required: true
    },
},{collection: 'Actividades_trabajadores'});

export default model('ActividadTrabajador', ActividadTrabajadorSchema);