// Importando as configuracoes do banco de dados
const Database = require('./config')

// Iniciando o banco de dados
initDb = {
    async init() {
        const db = await Database()

        await db.exec(`
        CREATE TABLE rooms (
            ID INTEGER PRIMARY KEY,
            password TEXT
        )`);

        await db.exec(`
        CREATE TABLE questions (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            description TEXT,
            read INT,
            room INT
        )`);

        await db.close()
    }
}

initDb.init();