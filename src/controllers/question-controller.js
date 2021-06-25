module.exports = {
    index(req, res) {
        const roomID = req.params.roomID
        const questionID = req.params.questionID
        const action = req.params.action
        const password = req.body.password

        console.log(`room = ${roomID}, question ID = ${questionID}, action = ${action}, password = ${password}`)
    }
}