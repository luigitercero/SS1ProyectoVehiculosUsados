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
