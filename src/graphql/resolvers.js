import Actividad from "../models/gestionHumana/Actividad";
import ActividadTrabajador from "../models/gestionHumana/ActividadTrabajador";
import Asistencia from "../models/gestionHumana/Asistencia";
import BalancePlanilla from "../models/gestionHumana/BalancePlanilla";
import BalanceSemanal from "../models/gestionHumana/BalanceSemanal";
import Persona from "../models/gestionHumana/Persona";
import PlanillaSemanal from "../models/gestionHumana/PlanillaSemanal";
import Prestamo from "../models/gestionHumana/Prestamo";
import Trabajador from "../models/gestionHumana/Trabajador";


export const resolvers = {
    Query: {
        Personas: async (_root, args, _context, _info) => {
            // proceso de autenticacion
            if (0 === 0) {
                // ejecucion de la consulta
                try {
                    return await Persona.find();
                } catch (error) {
                    throw new Error(error);
                }
            } else {
                alert('No estas autorizado!');
                console.error('No estas autorizado!');
                throw new Error('No estas autorizado!');
            };
        },
        Trabajadores: async (_root, args, _context, _info) => {
            // proceso de autenticacion
            if (0 === 0) {
                // ejecucion de la consulta
                try {
                    return await Trabajador.find();
                } catch (error) {
                    throw new Error(error);
                }
            } else {
                alert('No estas autorizado!');
                console.error('No estas autorizado!');
                throw new Error('No estas autorizado!');
            }
        }
    },
    Mutation: {
        async agregarPersona(
            _root,
            {
                nombres,
                apellidos,
                direccion,
                correoElectronico,
                numeroIdentificacion,
                numeroTelefono,
                sexo,
                fechaNacimiento,
                estado
            },
            _context,
            _info) {
            // por defecto el estado de una nueva persona sera pendiente
            // si estado no existe se le asiganara la siguiente cadena
            const estadoPersona = estado || "Pendiente";

            // proceso de autenticacion
            if (0 === 0) {
                // en caso de atenticarse:
                // calculo el tiempo trascurrido en milisegundo desde 1/enero/1970
                const tiempoTranscurrido = Date.now();

                // devuelve la fecha actual mas la hora
                const hoy = new Date(tiempoTranscurrido);

                // convierto a string la fecha.
                const fechaCreacion = hoy.toLocaleString();

                // uso el modelo Persona de moongose
                const npersonas = new Persona({
                    nombres: nombres,
                    apellidos: apellidos,
                    direccion: direccion,
                    correoElectronico: correoElectronico,
                    numeroIdentificacion: numeroIdentificacion,
                    numeroTelefono: numeroTelefono,
                    sexo: sexo,
                    fechaNacimiento: fechaNacimiento,
                    estado: estadoPersona,
                    fechaCreacion: fechaCreacion
                });
                // si todo sale bien se guarda el registro
                return await npersonas.save(
                    (error, documento) => {
                        if (error) {
                            // en caso de error al guardar imprime el error
                            console.error(error);
                        }
                        else {
                            // en caso de exito imprime el documento
                            console.error(documento);
                        }
                    }
                );
            } else {
                // en caso de fallar la autenticacion
                alert('No estas autorizado!');
                console.error('No estas autorizado!');
                throw new Error('No estas autorizado!');
            }
        },
        async actualizarPersona(
            _root,
            {
                nombres,
                apellidos,
                direccion,
                correoElectronico,
                numeroIdentificacion,
                numeroTelefono,
                sexo,
                fechaNacimiento
            },
            _context,
            _info) {
            // proceso de autenticacion
            if (0 === 0) {
                return await Persona.findByIdAndUpdate(id, {
                    nombres: nombres,
                    apellidos: apellidos,
                    direccion: direccion,
                    correoElectronico: correoElectronico,
                    numeroIdentificacion: numeroIdentificacion,
                    numeroTelefono: numeroTelefono,
                    sexo: sexo,
                    fechaNacimiento: fechaNacimiento
                });
            } else {
                // si no esta autorizado envio un mensaje
                alert('No estas autorizado!');
                console.error('No estas autorizado!');
                throw new Error('No estas autorizado');
            }
        },
        async eliminarPersona(
            _root,
            { id },
            _context,
            _info) {
            // proceso de autenticacion
            if (0 === 0) {
                return await Persona.findByIdAndDelete(id);
            } else {
                // si no esta autorizado envio un mensaje
                alert('No estas autorizado!');
                console.error('No estas autorizado!');
                throw new Error('No estas autorizado');
            }
        },
        async agregarTrabajador(
            _root,
            {
                idPersona,
                numeroTelefonoAcudiente
            },
            _context,
            _info) {
            // aqui se guardara el estado que proporcione el cliente o
            // en su defecto se creara como desactivado

            // proceso de autenticacion
            if (0 === 0) {

                // calculo el tiempo trascurrido en milisegundo desde 1/enero/1970
                const tiempoTranscurrido = Date.now();

                // devuelve la fecha actual mas la hora
                const hoy = new Date(tiempoTranscurrido);

                // convierto a string la fecha.
                const fechaCreacion = hoy.toLocaleString();

                // creo un objeto de tipo trabajador con el schema de mongoose
                const ntrabajador = new Trabajador({
                    idPersona: idPersona,
                    numeroTelefonoAcudiente: numeroTelefonoAcudiente
                });

                // si se agrega exitosamente entonces modifico el estado de la
                // personas a Autorizado
                await Persona.findByIdAndUpdate(id, {
                    estado: "Autorizado"
                })


                // si todo sale bien guardo el regristro
                return await ntrabajador.save(
                    (error, documento) => {
                        if (error) {
                            // en caso de error al guardar imprime el error
                            console.error(error);
                        }
                        else {
                            // en caso de exito imprime el documento
                            console.error(documento);
                        }
                    }
                );

            } else {
                // si no esta autorizado envio un mensaje
                alert('No estas autorizado!');
                console.error('No estas autorizado!');
                throw new Error('No estas autorizado!');
            }

        },
        async actualizarTrabajador(
            _root,
            {
                nombres,
                apellidos,
                direccion,
                correoElectronico,
                numeroIdentificacion,
                numeroTelefono,
                numeroTelefonoAcudiente,
                sexo,
                fechaNacimiento,
                estado
            },
            _context,
            _info
        ) {
            // proceso de autenticacion
            if (0 === 0) {
                // si tiene permisos de administrador o ingeniero esta
                // habilitado para modificar el estado sino lo es, solo
                // podra modificar datos basicos.

                // si el cliente proporciona el campo lo inserto
                if (numeroTelefonoAcudiente) {
                    await Trabajador.findByIdAndUpdate(id, {
                        numeroTelefonoAcudiente: numeroTelefonoAcudiente
                    })
                }
                return await Persona.findByIdAndUpdate(id, {
                    nombres: nombres,
                    apellidos: apellidos,
                    direccion: direccion,
                    correoElectronico: correoElectronico,
                    numeroIdentificacion: numeroIdentificacion,
                    numeroTelefono: numeroTelefono,
                    sexo: sexo,
                    fechaNacimiento: fechaNacimiento,
                    estado: estado
                });
            } else {
                // si no esta autorizado envio un mensaje
                alert('No estas autorizado!');
                console.error('No estas autorizado!');
                throw new Error('No estas autorizado');
            }
        },
        async eliminarTrabajador(
            _root,
            { id },
            _context,
            _info) {
            // proceso de autenticacion
            if (0 === 0) {
                return await Trabajador.findByIdAndDelete(id);
            } else {
                // si no esta autorizado envio un mensaje
                alert('No estas autorizado!');
                console.error('No estas autorizado!');
                throw new Error('No estas autorizado');
            }
        },
    }
}