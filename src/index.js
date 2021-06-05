const express= require('express');
const { propfind } = require('./routes/index');
const app= express();
const app2= express();
const http =require('http');
const servidor=http.createServer(app2);

const socketio = require('socket.io');
const io = require("socket.io")(servidor, {
    cors: {
      origin: "http://localhost:3001",
      methods: ["GET", "POST"]
    }
  });

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use(require("./routes/index"))
app.listen(process.env.PORT || 3000);
console.log('Server on port 3000')


io.on('connection', socket => {

    let nombre;
    socket.on('conectado', (nomb) =>{
        nombre=nomb;
        socket.broadcast.emit('mensajes',{nombre: nombre, mensaje: `${nombre} ha entrado en la clase`});
    });

    socket.on('mensaje',(nombre,mensaje)=> {
        io.emit("mensajes",{nombre , mensaje})
    })

    socket.on('disconnect', () => {
        io.emit('mensajes', {servidor: "Servidor", mensaje: `${nombre} ha abandonado la clase`})
    })


});
servidor.listen(3002, () => console.log("Servidor inicializado"));