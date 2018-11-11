//puerto
var port = 3000;

// importar
var express = require('express');

// instanciar
var app = express();
const bodyParser = require('body-parser');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors({ origin: true }));

app.use(express.static('public'));
// ruteo
app.get('/create', function (req, res) {
    console.log(req);
    res.sendfile(__dirname + '/public/CreateCar.html');
});

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


app.post('/createcar', async function (req,res){
    
    var body = req.body;
    console.log(body)
    var dato  = connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
       let consulta = `INSERT INTO mydb.Carro (linea,modelo,descripcion,marca) VALUES (${body.line},${body.model},${body.description},${body.marca})`
        let dato = connection.query(consulta,function(error, results,fields){
            if (error) throw error;
            console.log('The solution is: ', results);
            dato = results;
            return results;
        });
        connection.end();
       return dato
    });

    res.send(dato + "haz de enviar algo");
   // res.send("{hola:25}");
})

app.get('/cars',async function (req,res) {

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

        onsole.log('connected as id ' + connection.threadId);
        connection.query('show databases', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results);
        });

        connection.end();

    });

    response.send('Hello World!')
})
