import mongoose from "mongoose";

export const dbConnection = async () => {
    
    try {
        await mongoose.connect('mongodb+srv://admin:smRK8pTWkcjt0TAk@cluster0.p0iy5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log("Se ha conectado a la base de datos exitosamente")
    } catch (error) {
        console.error(error);
    }
}

