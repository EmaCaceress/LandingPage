const express = require("express")
const { Router } = express
const messageController = require('../controller/messageController')

const router = Router(Router)

router.post('/message/:userData', (req, res) => {
    console.log("Router Post : ", req.params)
    res.status(200).json(messageController.sendEmail(req.params))
})

module.exports = router;
