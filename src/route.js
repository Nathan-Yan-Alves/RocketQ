// Criando uma constante chamada express e requerindo a dependencia do mesmo
const express = require('express')

// Armazenando na constante route todas as funcionalidades de rota do express
const route = express.Router()

// Criando uma rota e renderizando as páginas html, que está na pasta view
route.get('/', (req, res) => res.render('index'))
route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('create-pass'))

route.post('/room/:roomCode/:question/:action', (req, res) => res.render())

// Exportando o arquivo
module.exports = route