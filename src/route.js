// Criando uma constante chamada express e requerindo a dependencia do mesmo
const express = require('express')

// Importanto o question controller
const questionController = require('./controllers/question-controller')

const roomController = require('./controllers/room-controller')

// Armazenando na constante route todas as funcionalidades de rota do express
const route = express.Router()

// Criando uma rota e renderizando as páginas html, que está na pasta view
route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))
route.get('/room/:roomID', (req, res) => res.render('room'))

// Formato que o formulario de dentro do modal precisa passar 
route.post('/question/:roomID/:questionID/:action', questionController.index)

// Passando a informacao do formulario para criar a sala
route.post("/create-room", roomController.create)

// Exportando o arquivo
module.exports = route