const { open } = require('sqlite');
const Database = require('../db/config')

module.exports = {
    async create(req, res) {
        const db = await Database()
        const password = req.body.password
        let roomID = 0;
        let isRoom = true
        
        while(isRoom) {
            // Gerando o ID da sala
            for(var i = 0; i < 6; i++) {
                roomID += Math.floor(Math.random() * 10).toString()
            }
            roomID = roomID.substr(1);

            // Verificar se o número já existe
            const roomsIDs = await db.all(`
                SELECT ID FROM rooms
            `)

            isRoom = roomsIDs.some(roomExistID => {roomExistID == roomID})
            
            if(!isRoom) {
                // Inserindo os dados no banco
                await db.run(`
                    INSERT INTO rooms (
                        ID,
                        password
                    ) VALUES (
                        ${parseInt(roomID)},
                        ${password}
                    )
                `)
            }
        }

        await db.close()

        res.redirect(`/room/${roomID}`)
    },

    async open(req, res) {
        const db = await Database()
        const roomID = req.params.roomID
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomID} AND read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomID} AND read = 1`)
        let isQuestions = true

        if(questions.length == 0) {
            if(questionsRead.length == 0) {
                isQuestions = false
            }
        }

        res.render('room', {roomID: roomID, questions: questions, questionsRead: questionsRead, isQuestions: isQuestions})
    },

    // Faz uma verificação para que o usuário entre apenas nas salas que existem
    async enter(req, res) {
        const db = await Database()
        const roomID = req.body.roomID

        const verifyID = await db.get(`
            SELECT * FROM rooms WHERE ID = ${roomID} 
        `)

        try {
            if(verifyID.ID == roomID) {
                res.redirect(`/room/${roomID}`)
            }    
        } catch (e) {
            res.render('id-incorrect')
        }
    }
}