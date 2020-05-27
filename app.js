var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var server = http.createServer(app);
var mongoose = require('mongoose');
var cors = require('cors')

//conexión a la base de datos
mongoose.connect('mongodb+srv://Tas:setazeta4@cluster0-0sccv.mongodb.net/lightlevel_database?retryWrites=true&w=majority',function(err,res){
  if(err) throw err;
  console.log('Conectado!')
});

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
routes = require('./routes/locations')(app);

app.get('/', function (req,res){
  res.send("Oh yeah baby");
});

server.listen(process.env.PORT || 3000, function(){
  console.log("Servidor corriendo en localhost:3000")
});

module.export= app;