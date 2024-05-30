const http = require('http');

http.createServer( ( request, response )=>{

    console.log( request )

    /*response.setHeader('Content-Disposition', 'attachment; filename=coders.csv');
    response.writeHead( 200, {'Content-Type': 'application/csv'} );*/
    //response.write('Hola Mundo NodeJs');
    response.write( JSON.stringify( { nombre: 'Maria', email: 'maria@gmail.com'} ) );

    /*response.write('id; nombre\n');
    response.write('1; Maria\n');
    response.write('2; Lucia\n');
    response.write('3; Carmen\n');
    response.write('4; Jorge\n');*/


    response.end();

} ).listen(8080);

console.log(`Escuchando en el puerto 8080`);
