// Importando o sqlite 3
const sqlite3 = require('sqlite3')

// Importando apenas a função open do sqlite
const {open} = require('sqlite')

// Exportando a função
module.exports = () =>
    // Configurando o banco de dados
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    });