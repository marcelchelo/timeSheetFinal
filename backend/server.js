const express =  require ('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const PORT =  process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.get("/", (req,res)=>{
    res.status(200)
    res.json({
        message: 'Welcome to FingerIOT'
    })
})

//Routes
app.use('/api/users', require('./routes/userRoutes')) 
app.use('/api/dash', require('./routes/dashRoutes'))
app.use(errorHandler)


app.listen(PORT, ()=>console.log(`Server Started on port ${PORT}`))
