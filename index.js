import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import eventRoutes from './routes/events.js';
import { dbConection } from './database/config.js';
dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url)); 

//* Servidor Express
const app = express();

//* Base de Datos
dbConection();

//* CORS
app.use(cors())


//* Directorio Publico
app.use( express.static('public') );

//* Lectura y parseo del body */
app.use( express.json() );

//* Rutas
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

app.use('/{*splat}', (req, res) => {
    res.sendFile( path.join(__dirname, 'public/index.html') );
});

const port = process.env.PORT
app.listen(port, () => {
    console.log( colors.bgBlue.italic(`Servidor backend corriendo en el puerto ${port}`));
    
});