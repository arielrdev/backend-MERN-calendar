import express from 'express';
import colors from 'colors';

const app = express();



const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log( colors.bgBlue.italic(`Servidor backend corriendo en el puerto ${port}`));
    
})