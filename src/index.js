const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 
const app = express();
const PORT = process.env.PORT;

//Rutas
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/tienda', (req, res) => {
    res.sendFile(__dirname + '\\public\\html\\tienda.html')
});

app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '\\public\\html\\registro.html')
});

app.get('/compraoro', (req, res) => {
    res.sendFile(__dirname + '\\public\\html\\compraoro.html')
});

app.get('/ini_sec', (req, res) => {
    res.sendFile(__dirname + '\\public\\html\\ini_sec.html')
});

app.get('/registrarse', (req, res) => {
    res.json(req.query)
});
  
//Milddleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// Controller
const controller = require('./controllers/controller_user');

//Crear cuenta
app.post('/registrarse', controller.nueva_cuenta);

// Iniciar sesion
app.post('/iniciar_sesion', controller.buscar);

//Mostrar datos
app.get('/datos', controller.mostrar_perfil)

mongoose.set("strictQuery", false);
mongoose.connect(
    process.env.URI_MONGO_REMOTA,
      (error) => {
   if(error) console.log(error) 
   else console.log('Conectado a la base de datos');
  }
);     

const conectar = async () => {
    try{
        app.listen(PORT)
        console.log(`Conectado ${PORT}`)
    }catch(error){
        console.log('error' + error.message)
    }
};

conectar();

