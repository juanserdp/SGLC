import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

// NOTA: EL SIMBOLO ! SIGNIFICA QUE EL ARGUMENTO ES OBLIGATORIO
export const typeDefs = `   
    type Query {
        Personas: [Persona]
    }
    type Mutation {
        agregarPersona(nombres: String!, apellidos: String!, direccion: String!, correoElectronico: String, numeroIdentificacion: String!, numeroTelefono: String!, sexo: String!, fechaNacimiento: String!): Persona!
        actualizarPersona(id: ID!, nombres: String!, apellidos: String!, direccion: String!, correoElectronico: String, numeroIdentificacion: String!, numeroTelefono: String!, sexo: String!, fechaNacimiento: String!, estado: Boolean!, fechaCreacion: String!): Persona!
        eliminarPersona(id: ID!): Persona!
    }
    type Persona {
        id: ID!
        nombres: String
        apellidos: String
        direccion: String
        correoElectronico: String
        numeroIdentificacion: String
        numeroTelefono: String
        sexo: String
        fechaNacimiento: String
        estado: Boolean
        fechaCreacion: String
    }
`;

export default makeExecutableSchema({ 
    typeDefs: [typeDefs],
    resolvers: resolvers
});