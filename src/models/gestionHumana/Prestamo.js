import {Schema, model} from 'mongoose';

const PrestamoSchema = new Schema({
    idTrabajador: {
        type: Schema.Types.ObjectId,
        ref: 'Trabajador',
        required: true
    },
    fechaPrestamo: {
        type: Date,
        required: true
    },
    conceptoPrestamo: {
        type: String,
        required: true
    },
    valorPrestamo: {
        type: Number,
        required: true
    },
    prestamoCancelado: {
        type: Boolean,
        required: true
    },
},{collection: 'Prestamos'});

export default model('Prestamo', PrestamoSchema);