const express = require ("express")
const router = express.Router()
const {checkUser, registerUser, loginUser} = require('../controllers/userController')

router.post('/', checkUser ,registerUser) 

router.post('/login', loginUser)

module.exports = router