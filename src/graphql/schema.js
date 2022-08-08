import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

// NOTA: EL SIMBOLO ! SIGNIFICA QUE EL ARGUMENTO ES OBLIGATORIO
export const typeDefs = `
    """ Consultas """   
    type Query {
        Personas: [Persona]
        Trabajadores: [Trabajador]
    }
    
    """ Mutaciones """   
    type Mutation {
        agregarPersona(
            nombres: String!,
            apellidos: String!,
            direccion: String!,
            correoElectronico: String,
            numeroIdentificacion: Float!,
            numeroTelefono: Float!,
            sexo: String!,
            fechaNacimiento: String!,
            estado: String!
            ): Persona!

        """ El estado no se actualiza hasta que se le asigne un rol """ 
        actualizarPersona(
            id: ID!, 
            nombres: String!, 
            apellidos: String!, 
            direccion: String!, 
            correoElectronico: String, 
            numeroIdentificacion: Float!, 
            numeroTelefono: Float!, 
            sexo: String!, 
            fechaNacimiento: String!, 


            ): Persona!
        eliminarPersona(id: ID!): Persona

        agregarTrabajador(
            idPersona: String!, 
            apellidos: String!, 
            direccion: String!, 
            correoElectronico: String, 
            numeroIdentificacion: Float!, 
            numeroTelefono: Float!, 
            numeroTelefonoAcudiente: Float!, 
            sexo: String!, 
            fechaNacimiento: String!, 
            estado: String!
            ): Trabajador
        actualizarTrabajador(
            id: ID!,
            nombres: String!, 
            apellidos: String!, 
            direccion: String!, 
            correoElectronico: String, 
            numeroIdentificacion: Float!, 
            numeroTelefono: Float!, 
            numeroTelefonoAcudiente: Float!, 
            sexo: String!, 
            fechaNacimiento: String!, 
            estado: String!, 
            fechaCreacion: String!
            ): Trabajador!
        eliminarTrabajador(id: ID!): Trabajador
    }

    """ Tipos """   
    type Persona {
        id: ID!
        nombres: String
        apellidos: String
        direccion: String
        correoElectronico: String
        numeroIdentificacion: Float
        numeroTelefono: Float
        sexo: String
        fechaNacimiento: String
        estado: String
        fechaCreacion: String
    }
    type Trabajador {
        id: ID!
        idPersona: Persona
        numeroTelefonoAcudiente: Float
    }
`;

export default makeExecutableSchema({
    typeDefs: [typeDefs],
    resolvers: resolvers
});