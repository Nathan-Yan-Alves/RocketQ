// Criando uma constante chamada express e requerindo a dependencia do mesmo
const express = require('express')

// Criando um caminho para o ejs
const path = require('path')

// Exportando o arquivo route para a constante route
const route = require('./route')

// Iniciando o express na constante server
const server = express()

// Especificando para o server que a nossa view engine é o ejs
server.set('view engine', 'ejs')

// Passando a pasta public para o express static
server.use(express.static('public'))

// Especificando para o server aonde está o index.ejs 
server.set('views', path.join(__dirname, 'views'))

// Pega o conteudo do formulario e decodifica ele para passar para o question-controller
server.use(express.urlencoded({extended: true}))

// Especificando para o server usar o arquivo route
server.use(route)

// Iniciando o node na porta 3000 e imprimindo no terminal um 'Sucess' para ter certeza que funcionou
server.listen(3000, () => console.log("Sucess"))