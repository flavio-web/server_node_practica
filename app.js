const express = require('express');

const app = express();
const port = 8080;

app.use( express.json() );
app.use( express.static('public') );


app.get('/', (req, res) =>{

    res.sendFile( __dirname +  '/public/index.html');
});


app.get('/usuario', ( req, res )=>{

    const usuario = {
        nombre: 'Maria',
        email: 'maria@gmail.com'
    };

    res.json( usuario );
});


app.get('/:id', (req, res) =>{
    const { id } = req.params;
    res.json({ id });
});

app.post('/', ( req, res ) =>{
    const data = req.body;
    console.log( data );

    res.json({ ruta: 'Metodo Post', data });
});

app.put('/', ( req, res )=>{
    const data = req.body;
    res.json({ ruta: 'Metodo Put', data });
});

app.delete('/:id', (req, res) =>{
    const id = req.params.id;
    res.json({ ruta: 'Metodo Delete', id });
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