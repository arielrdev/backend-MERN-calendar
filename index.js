import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import { dbConection } from './database/config.js';
dotenv.config();


const app = express();

dbConection();

const port = process.env.PORT

//* Directorio Publico
app.use( express.static('public') );

//* Lectura y parseo del body */
app.use( express.json() );

//* Rutas
app.use('/api/auth', authRoutes);
//TODO: CRUD


app.listen(port, () => {
    console.log( colors.bgBlue.italic(`Servidor backend corriendo en el puerto ${port}`));
    
});