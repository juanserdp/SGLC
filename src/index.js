import express from "express";
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema';
import cors from 'cors';
import {dbConnection} from './database/config';
const app = express();

//Iniciamos la conexion de mongo
dbConnection();

app.use(cors());

// Validar el token

// Definir el end point de acceso de graphql
app.use("/graphql", graphqlHTTP( (req) => ({
    graphiql : true,
    schema : schema
})));

app.listen(process.env.PORT || 4000, () =>{
    console.log(`Servidor corriendo en el puerto: ${process.env.PORT || 4000}`)
});