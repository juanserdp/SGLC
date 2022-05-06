import Actividad from "../models/gestionPersonas/Actividad";
import ActividadTrabajador from "../models/gestionHumana/ActividadTrabajador";
import Asistencia from "../models/gestionHumana/Asistencia";
import BalancePlanilla from "../models/gestionHumana/BalancePlanilla";
import BalanceSemanal from "../models/gestionHumana/BalanceSemanal";
import Persona from "../models/gestionHumana/Persona";
import PlanillaSemanal from "../models/gestionHumana/PlanillaSemanal";
import Prestamo from "../models/gestionPersonas/Prestamo";
import Trabajador from "../models/gestionPersonas/Trabajador";



export const resolvers = {
    Query: {
        Actividades: async (_, args, _) => {
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
        ActividadesPorTrabajador: async (_, {id}, _) => {
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
        AsistenciasPorTrabajador: async (_, {id}, _) => {
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
        BalancesPlanillas: async (_, {id}, _) => {
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
        BalancesSemanalesPorTrabajador: async (_, {id}, _) => {
            if (0 === 0) {
                try {
                    return await BalanceSemanal.findById(id).populate('idTrabajador');
                } catch (error) {
                    throw new Error(error);
                }
            } else {
                throw new Error('No estas autorizado!');
            }
        },
        Personas: async (_, args, _) => {
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
        Ingenieros: async (_, args, _) => {
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
        PrestamosPorTrabajador: async (_, {id}, _) => {
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
        Trabajadores: async (_, args, _) => {
            if (0 === 0) {
                try {
                    return await Trabajador.find().populate('idPersona');
                } catch (error) {
                    throw new Error(error);
                }
            } else {
                throw new Error('No estas autorizado!');
            }
         },
    },
    Mutation: {
        async agregarActividad(_, {nombreActividad, precioActividad, porcentajeDescuento}, _) {
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
        async actualizarActividad(_, { id, nombreActividad, precioActividad, porcentajeDescuento}, _) {
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
        async eliminarActividad(_, { id }, _) {
            if (0 === 0) {
                return await Actividad.findByIdAndDelete(id);
            } else {
                throw new Error('No estas autorizado');
            }
        },
        async agregarPersona(_, {nombres, apellidos, numeroIdentificacion, sexo, direccion, numeroTelefono, fechaNacimiento, estado, fechaCreacion}, _){
            if(0 === 0){
                const npersonas = new Persona({
                    nombres: nombres,
                    apellidos: apellidos,
                    numeroIdentificacion: numeroIdentificacion,
                    sexo: sexo,
                    direccion: direccion,
                    numeroTelefono: numeroTelefono,
                    fechaNacimiento: fechaNacimiento,
                    estado: estado,
                    fechaCreacion: fechaCreacion
                });
                return await npersonas.save();
            }else{
                throw new Error('No estas autorizado!');
            }
            
        },
        async actualizarPersona(_, {id, nombres, apellidos, numeroIdentificacion, sexo, direccion, numeroTelefono, fechaNacimiento, estado, fechaCreacion}, _){
            if (0 === 0) {
                return await Persona.findByIdAndUpdate(id, {
                    nombres: nombres,
                    apellidos: apellidos,
                    numeroIdentificacion: numeroIdentificacion,
                    sexo: sexo,
                    direccion: direccion,
                    numeroTelefono: numeroTelefono,
                    fechaNacimiento: fechaNacimiento,
                    estado: estado,
                    fechaCreacion: fechaCreacion
                });
            } else {
                throw new Error('No estas autorizado');
            }
        },
        async eliminarPersona(_, {id}, _){
            if (0 === 0) {
                return await Actividad.findByIdAndDelete(id);
            } else {
                throw new Error('No estas autorizado');
            }
        },
        async agregarTrabajador(_, trabajador, _) {

        },
        async actualizarTrabajador(_, { id, trabajador}, _) {

        },
        async eliminarTrabajador(_, { id }, _) {

        },
        
        

    }
}