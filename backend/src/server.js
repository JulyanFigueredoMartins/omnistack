const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);



mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-57vjj.azure.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connectedUsers = {};

io.on('connection', socket => {
    console.log(socket.handshake.query);
    console.log('usuario conectado', socket.id);

    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
})

    //req: informações que o usuario envia pela requisação
    //res : devolver uma resposta para aquela requisição

// req.query para acessar os query parameters (filtros)
// req.params serve para acessar valores na url (edição, delete)
// req.body server para acessar corpo da requisição (criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

server.listen(3333);