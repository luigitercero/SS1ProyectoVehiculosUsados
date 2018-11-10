//puerto
var port = 3000;

// importar
var express = require('express');

// instanciar
var app = express();

// ruteo
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});
app.get('/about', function (req, res) {
    res.sendfile(__dirname + '/public/about.html');
});

// escuchar

app.listen(port);

console.log("Servidor Express escuchando en modo %s  %s ",port ,app.settings.env);

app.get('/hola.txt', function (req, res) {
    res.send('Hola mundo');
});

app.get('/hola.html', function (req, res) {
    res.sendfile(__dirname + '/hola.html');
});

app.get('/hola.json', function (req, res) {
    // Indicamos el tipo de contenido a devolver en las cabeceras de nuestra respuesta
    res.contentType('application/json');
    res.sendfile(__dirname + '/hola.json');
});


var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'seminario1.cdrcqs8khrfy.us-west-2.rds.amazonaws.com',
    user: 'seminario1',
    password: 'seminario1'
});


app.get('/hola', function (request, response) {
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);
        connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
        });

        connection.end();

    });

    response.send('Hello World!')
})
