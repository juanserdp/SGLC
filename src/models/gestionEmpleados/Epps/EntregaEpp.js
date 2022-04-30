import {Schema, model} from 'mongoose';

const EntregaEppSchema = new Schema({
    idEpp: {
        type: Schema.Types.ObjectId,
        ref: 'Epp',
        required: true
    },
    idTrabajador: {
        type: Schema.Types.ObjectId,
        ref: 'Trabajador',
        required: true
    },
    fechaEntregaEpp: {
        type: Date,
        required: true
    },
},{collection: 'EntregaEpp'});

export default model('EntregaEpp', EntregaEppSchema);