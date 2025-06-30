import mongoose from "mongoose";
import colors from 'colors';
import { exit } from 'node:process';


export const dbConection =  async () => {
    try {
       
        const { connection } = await mongoose.connect(process.env.DB_CNN)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.magenta.bold(`MongoDB Conectado en: ${url}`));

    } catch (error) {
        console.log(error.message);
        console.log(colors.bgWhite.red.bold('Error al conectar a MongoDB'))
        exit(1)
    }
}