const Database = require('../db/config')

module.exports = {
    async create(req, res) {
        const db = await Database()
        const password = req.body.password
        let roomID = 0;
        
        for(i = 0; i < 6; i++) {
            roomID += Math.floor(Math.random() * 10).toString()
        }

        roomID = roomID.substr(1);

        await db.run(`
            INSERT INTO rooms (
                ID,
                password
            ) VALUES (
                ${parseInt(roomID)},
                ${password}
            )
        `)

        await db.close()

        res.redirect(`/room/${roomID}`)
    }
}