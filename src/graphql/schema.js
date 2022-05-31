import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

// NOTA: EL SIMBOLO ! SIGNIFICA QUE EL ARGUMENTO ES OBLIGATORIO
export const typeDefs = `   
    type Query {
        Personas: [Persona]
        Trabajadores: [Trabajador]
    }
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
            estado: String!, 
            fechaCreacion: String!
            ): Persona!
        eliminarPersona(id: ID!): Persona

        agregarTrabajador(
            nombres: String!, 
            apellidos: String!, 
            direccion: String!, 
            correoElectronico: String, 
            numeroIdentificacion: Float!, 
            numeroTelefono: Float!, 
            numeroTelefonoAcudiente: Float!, 
            sexo: String!, 
            fechaNacimiento: String!, 
            estado: String!
            ): Persona!
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
            ): Persona!
        eliminarTrabajador(id: ID!): Trabajador

        asignarRolTrabajador(id: ID!, numeroTelefonoAcudiente: Int!)
    }
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
        nombres: String
        apellidos: String
        direccion: String
        correoElectronico: String
        numeroIdentificacion: Float
        numeroTelefono: Float
        numeroTelefonoAcudiente: Float
        sexo: String
        fechaNacimiento: String
        estado: String
        fechaCreacion: String
    }
`;

export default makeExecutableSchema({
    typeDefs: [typeDefs],
    resolvers: resolvers
});