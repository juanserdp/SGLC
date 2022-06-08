import express from "express";
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema';
import cors from 'cors';
import {dbConnection} from './database/config';

const app = express();
app.use(express.json({type: '*/*'}));
const nodemailer = require('nodemailer');

//Iniciamos la conexion de mongo
dbConnection();

app.use(cors());

// Validar el token

app.post("/contacto",(req, res)=>{
    //validar que la solicitud tenga datos
    if (!req.body) {
        res.status(400).send({ message: 'El contenido del mensaje debe tener las credenciales de acceso' });
        console.log("no hay datos");
    }
    let nombre = req.body.nombre;
    let correo = req.body.correo;
    let cuerpo = req.body.cuerpo;
    async function main(nombre, correo, cuerpo) {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.mail.yahoo.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "juanrodnodemailer@yahoo.com", // generated ethereal user
                pass: "qkfczjnyobljliic", // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `juanrodnodemailer@yahoo.com`, // sender address
            to: "juansesebas97@gmail.com", // list of receivers
            subject: `Proyecciones Plasticas Lirio del Campo`, // Subject line
            text: ``, // plain text body
            html: `
            <h3>Mi nombre es ${nombre}, mi correo es ${correo}</h3>
            <p>${cuerpo}</p>`, // html body
        });

    }
    main(nombre, correo, cuerpo).catch(console.error);
    res.status(200).send({message: "Mensaje enviado"});
})

// Definir el end point de acceso de graphql
app.use("/graphql", graphqlHTTP( (req) => ({
    graphiql : true,
    schema : schema
})));

app.listen(process.env.PORT || 4000, () =>{
    console.log(`Servidor corriendo en el puerto: ${process.env.PORT || 4000}`)
});