import Actividad from "../models/gestionHumana/Actividad";
import ActividadTrabajador from "../models/gestionHumana/ActividadTrabajador";
import Asistencia from "../models/gestionHumana/Asistencia";
import BalancePlanilla from "../models/gestionHumana/BalancePlanilla";
import BalanceSemanal from "../models/gestionHumana/BalanceSemanal";
import Persona from "../models/gestionHumana/Persona";
import PlanillaSemanal from "../models/gestionHumana/PlanillaSemanal";
import Prestamo from "../models/gestionHumana/Prestamo";
import Trabajador from "../models/gestionHumana/Trabajador";

/**Actividades: async (_root, args, _context, _info) => {
            if (0 === 0) {
                try {
                    return await Actividad.find();
                } catch (error) {
                    throw new Error(error);
                }
            } else {
                throw new Error('No estas autorizado!');
            }

        },
        ActividadesPorTrabajador: async (_root, {id}, _context, _info) => {
            if (0 === 0) {
                try {
                    return await ActividadTrabajador.findById(id).populate('idActividad').populate('idPlanillaSemanal').populate('idIngeniero');
                } catch (error) {
                    throw new Error(error);
                }
            } else {
                throw new Error('No estas autorizado!');
            }
        },
        AsistenciasPorTrabajador: async (_root, {id}, _context, _info) => {
            if (0 === 0) {
                try {
                    return await Asistencia.findById(id).populate('idTrabajador');
                } catch (error) {
                    throw new Error(error);
                }
            } else {
                throw new Error('No estas autorizado!');
            }
        },
        BalancesPlanillas: async (_root, {id}, _context, _info) => {
            if (0 === 0) {
                try {
                    return await BalancePlanilla.findById(id).populate('idTrabajador');
                } catch (error) {
                    throw new Error(error);
                }
            } else {
                throw new Error('No estas autorizado!');
            }
        },
        BalancesSemanalesPorTrabajador: async (_root, {id}, _context, _info) => {
            if (0 === 0) {
                try {
                    return await BalanceSemanal.findById(id).populate('idTrabajador');
                } catch (error) {
                    throw new Error(error);
                }
            } else {
                throw new Error('No estas autorizado!');
            }
        }, */

/**,
Ingenieros: async (_root, args, _context, _info) => {
    if (0 === 0) {
        try {
            return await Ingeniero.find().populate('idPersona');
        } catch (error) {
            throw new Error(error);
        }
    } else {
        throw new Error('No estas autorizado!');
    }
},
PrestamosPorTrabajador: async (_root, {id}, _context, _info) => {
    if (0 === 0) {
        try {
            return await Prestamo.findById(id).populate('idTrabajador');
        } catch (error) {
            throw new Error(error);
        }
    } else {
        throw new Error('No estas autorizado!');
    }
},
Trabajadores: async (_root, args, _context, _info) => {
    if (0 === 0) {
        try {
            return await Trabajador.find().populate('idPersona');
        } catch (error) {
            throw new Error(error);
        }
    } else {
        throw new Error('No estas autorizado!');
    }
 }, */

/**async agregarActividad(_root, {nombreActividad, precioActividad, porcentajeDescuento}, _context, _info) {
            if (0 === 0) {
                const nactividad = new Actividad({
                    nombreActividad: nombreActividad,
                    precioActividad: precioActividad,
                    porcentajeDescuento: porcentajeDescuento
                });
                return await nactividad.save();
            } else {
                throw new Error('No estas autorizado!');
            }
        },
        async actualizarActividad(_root, { id, nombreActividad, precioActividad, porcentajeDescuento}, _context, _info) {
            if (0 === 0) {
                return await Actividad.findByIdAndUpdate(id, {
                    nombreActividad: nombreActividad,
                    precioActividad: precioActividad,
                    porcentajeDescuento: porcentajeDescuento
                });
            } else {
                throw new Error('No estas autorizado');
            }
        },
        async eliminarActividad(_root, { id }, _context, _info) {
            if (0 === 0) {
                return await Actividad.findByIdAndDelete(id);
            } else {
                throw new Error('No estas autorizado');
            }
        }, */

/**async (_root, trabajador, _context, _info) {

},
async actualizarTrabajador(_root, { id, trabajador}, _context, _info) {

},
async eliminarTrabajador(_root, { id }, _context, _info) {

}, */

export const resolvers = {
    Query: {
        Personas: async (_root, args, _context, _info) => {
            if (0 === 0) {
                try {
                    return await Persona.find();
                } catch (error) {
                    throw new Error(error);
                }
            } else {
                throw new Error('No estas autorizado!');
            }
        },
        Trabajadores: async (_root, args, _context, _info) => {
            if (0 === 0) {
                try {
                    return await Trabajador.find();
                } catch (error) {
                    throw new Error(error);
                }
            } else {
                throw new Error('No estas autorizado!');
            }
        }
    },
    Mutation: {
        async agregarPersona(_root, { nombres, apellidos, direccion, correoElectronico, numeroIdentificacion, numeroTelefono, sexo, fechaNacimiento, estado}, _context, _info) {
            let estadoPersona = "No-autorizado"
            try {
                if(estado){
                    estadoPersona = estado;
                }
                if (0 === 0) {
                    let tiempoTranscurrido = Date.now();
                    let hoy = new Date(tiempoTranscurrido);
                    let fechaNacimientoPersona = new Date(fechaNacimiento);
                    const fechaCreacion = hoy.toLocaleString();
                    fechaNacimientoPersona = fechaNacimiento.toLocaleString();
                    console.log( typeof fechaCreacion);
                    console.log(fechaCreacion)
                    const npersonas = new Persona({
                        nombres: nombres,
                        apellidos: apellidos,
                        direccion: direccion,
                        correoElectronico: correoElectronico,
                        numeroIdentificacion: numeroIdentificacion,
                        numeroTelefono: numeroTelefono,
                        sexo: sexo,
                        fechaNacimiento: fechaNacimientoPersona,
                        estado: estadoPersona,
                        fechaCreacion: fechaCreacion
                    });
                    return await npersonas.save();
                } else {
                    throw new Error('No estas autorizado!');
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        async actualizarPersona(_root, { id, nombres, apellidos, direccion, correoElectronico, numeroIdentificacion, numeroTelefono, sexo, fechaNacimiento}, _context, _info) {
            if (0 === 0) {
                return await Persona.findByIdAndUpdate(id, {
                    nombres: nombres,
                    apellidos: apellidos,
                    direccion: direccion,
                    correoElectronico: direccion,
                    numeroIdentificacion: numeroIdentificacion,
                    numeroTelefono: numeroTelefono,
                    sexo: sexo,
                    fechaNacimiento: fechaNacimiento
                });
            } else {
                throw new Error('No estas autorizado');
            }
        },
        async eliminarPersona(_root, { id }, _context, _info) {
            if (0 === 0) {
                return await Persona.findByIdAndDelete(id);
            } else {
                throw new Error('No estas autorizado');
            }
        },
        async asignarRolTrabajador(_root, { id, numeroTelefonoAcudiente }, _context, _info){
            // USO EL TRY PARA QUE NO SE CORTE MI EJECUCION SI HAY ALGUN ERROR Y ME LO MUESTRE
            try {
                // COMPROBAR SI EL USUARIO ESTA LOGEADO
                if (0 === 0) {
                    // BUSCO EN MI TABLA PERSONA LOS DATOS DE LA PERSONA QUE SELECIONE
                    const datosPersonalesTrabajador = await Persona.find({_id: id});

                    // UNO EL CAMPO NUMERO DE TELEFONO A LOS DATOS PERSONALES DEL NUEVO TRABAJADOR
                    const nuevoTrabajador = Object.assign(datosPersonalesTrabajador, {numeroTelefonoAcudiente: numeroTelefonoAcudiente});

                    // GUARDO EN MI TABLA TRABAJADOR LOS DATOS DEL NUEVO TRABAJADOR CON EL MODELO
                    const ntrabajador= new Trabajador({
                        _id: id,
                        nombres: nuevoTrabajador.nombres,
                        apellidos: nuevoTrabajador.apellidos,
                        direccion: nuevoTrabajador.direccion,
                        correoElectronico: nuevoTrabajador.correoElectronico,
                        numeroIdentificacion: nuevoTrabajador.numeroIdentificacion,
                        numeroTelefono: nuevoTrabajador.numeroTelefono,
                        sexo: nuevoTrabajador.sexo,
                        fechaNacimiento: nuevoTrabajador.fechaNacimientoPersona,
                        estado: nuevoTrabajador.estadoPersona,
                        fechaCreacion: nuevoTrabajador.fechaCreacion
                        
                    });
                    // GUARDO EL TRABAJADOR EN MI TABLA
                    return await ntrabajador.save((error, documento) => {
                        if (error){
                            console.error(error);
                        }
                        else{
                            // SINO OCURRE UN ERROR PUEDO ELIMINAR DE MI TABLA PERSONAS A LA PERSONA
                            // await Persona.findByIdAndDelete(id);
                            console.error(documento);
                        }
                    });
                } else {
                    throw new Error('No estas autorizado!');
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        async agregarTrabajador(_root, { nombres, apellidos, direccion, correoElectronico, numeroIdentificacion, numeroTelefono, numeroTelefonoAcudiente, sexo, fechaNacimiento, estado}, _context, _info){
            let estadoTrabajador = "No-autorizado";
            try {
                if(estado){
                    estadoTrabajador = estado;
                }
                if (0 === 0) {
                    let tiempoTranscurrido = Date.now();
                    let hoy = new Date(tiempoTranscurrido);
                    let fechaNacimientoTrabajador = new Date(fechaNacimiento);
                    const fechaCreacion = hoy.toLocaleString();
                    fechaNacimientoTrabajador = fechaNacimiento.toLocaleString();
                    const ntrabajador = new Trabajador({
                        nombres: nombres,
                        apellidos: apellidos,
                        direccion: direccion,
                        correoElectronico: correoElectronico,
                        numeroIdentificacion: numeroIdentificacion,
                        numeroTelefono: numeroTelefono,
                        numeroTelefonoAcudiente: numeroTelefonoAcudiente,
                        sexo: sexo,
                        fechaNacimiento: fechaNacimientoTrabajador,
                        estado: estadoTrabajador,
                        fechaCreacion: fechaCreacion
                    });
                    return await ntrabajador.save(
                        (error, documento) => {
                            if (error){
                                console.error(error);
                            }
                            else{
                                console.error(documento);
                            }}
                    );
                } else {
                    throw new Error('No estas autorizado!');
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        async actualizarTrabajador(){

        },
        async eliminarTrabajador(){

        },







    }
}