const express = require ("express")
const router = express.Router()
const {checkUser, registerUser,
     loginUser,userDashboard} = require('../controllers/userController')

const {protect} = require ('../middleware/authMiddleware')



router.post('/', checkUser ,registerUser) 

router.post('/login', loginUser)

//protected route


//remove this 
router.get('/dashboard', protect  ,userDashboard)

module.exports = router