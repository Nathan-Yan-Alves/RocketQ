const Database = require('../db/config')

module.exports = {
    async index(req, res) {
        const db = await Database()
        const roomID = req.params.roomID
        const questionID = req.params.questionID
        const action = req.params.action
        const password = req.body.password

        // Verificando a validade da senha
        const verifyPass = await db.get(`
            SELECT * FROM rooms WHERE ID = ${roomID}
        `)

        if(verifyPass.password == password) {
            if(action == 'delete') {
                await db.run(`
                    DELETE FROM questions WHERE ID = ${questionID}
                `)
            } else if (action == 'check') {
                await db.run(`
                    UPDATE questions SET read = 1 WHERE ID = ${questionID}
                `)
            }
            res.redirect(`/room/${roomID}`)
        } else {
            res.render('pass-incorrect', {roomID: roomID})
        }

    },

    async create(req, res) {
        const db = await Database();
        const question = req.body.question
        const roomID = req.params.roomID

        await db.run(`
            INSERT INTO questions(
                description,
                read,
                room
            ) VALUES (
                "${question}",
                0,
                ${roomID}
            )
        `)

        res.redirect(`/room/${roomID}`)
    }
}