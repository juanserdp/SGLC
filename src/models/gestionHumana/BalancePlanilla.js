import {Schema, model} from 'mongoose';

const BalancePlanilla = new Schema({
    idPlanillaSemanal: {
        type: Schema.Types.ObjectId,
        ref: 'PlanillaSemanal',
        required: true
    },
    idBalanceSemanal: {
        type: Schema.Types.ObjectId,
        ref: 'BalanceSemanal',
        required: true
    },
    subtotal: {
        type: Number,
        required: false
    }
},{collection: 'Balances_planillas'});

export default model('BalancePlanilla', BalancePlanilla);