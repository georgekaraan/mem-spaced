const express = require("express"),
    router = express.Router(),
    controller = require('../controllers/user.controller')


router.post('/register', controller.register)
router.post('/login', controller.login)
router.post('/delete', controller.deleteUser)



module.exports = router;