import {Schema, model} from 'mongoose';

const PlanillaSemanalSchema = new Schema({
    fechaCreacion: {
        type: Date,
        required: true
    },
    asentado: {
        type: Boolean,
        required: true
    },
},{collection: 'Planillas_semanales'});

export default model('PlanillaSemanal', PlanillaSemanalSchema);