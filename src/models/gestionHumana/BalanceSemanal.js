import {Schema, model} from 'mongoose';

const BalanceSemanalSchema = new Schema({
    idTrabajador: {
        type: String,
        required: true
    },
    fechaInicio: {
        type: Number,
        required: true
    },
    fechaFinalizacion: {
        type: Number,
        required: true
    },
    inasistencias: {
        type: Number,
        required: false
    },
    sueldoSemanal: {
        type: Number,
        required: false
    },
},{collection: 'Balances_semanales'});

export default model('BalanceSemanal', BalanceSemanalSchema);