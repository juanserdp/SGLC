import {Schema, model} from 'mongoose';

const EppSchema = new Schema({
    nombreEpp: {
        type: String,
        required: true
    },
    existenciaEpp: {
        type: Number,
        required: true
    },
    duracionEpp: {
        type: Number,
        required: true
    },
},{collection: 'Epps'});

export default model('Epp', EppSchema);