import express from "express";
import cors from 'cors';
import {dbConnection} from './database/config';
const app = express();

//Iniciamos la conexion de mongo
dbConnection();

app.use(cors());

// Validar el token

// Definir el punto de acceso de graphql

app.listen(process.env.PORT || 4000, () =>{
    console.log(`Servidor corriendo en el puerto: ${process.env.PORT || 4000}`)
});