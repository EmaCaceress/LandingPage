class messageController {
    static sendEmail(req) {
        console.log("Mensaje enviado de manera exitosa ", req)
        return req
    }
}

module.exports = messageController;