const express = require('express');

const app = express();
const port = 8080;

app.get('/', ( req, res )=>{

    const usuario = {
        nombre: 'Maria',
        email: 'maria@gmail.com'
    };

    res.json( usuario );
});

app.get('*', ( req, res ) =>{
    const pagina = {
        nombre: 'No Encontrada',
        estado: 404
    };

    res.json( pagina );
});

app.listen( port, ()=>{
    console.log(`Escuchando en el puerto ${port}`);
} )