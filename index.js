import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT

app.use( express.static('public') );

app.listen(port, () => {
    console.log( colors.bgBlue.italic(`Servidor backend corriendo en el puerto ${port}`));
    
});