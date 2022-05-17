const asyncHandler = require('express-async-handler')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


async function main (){
    const allUsers = await prisma.user.findMany()
    res.json(allUsers)
}



// $$ description
//route    /api/users
//$$ access public 
const registerUser = asyncHandler( async (req,res, next ) =>{
   const {name, email, password} = req.body
   
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please include all fields')
    }else{
        try {
            const users = await prisma.user.findMany({})
            res.json(users)
        } catch (error) {   //since I'm using ayncHandler, this is not needed. But lets leave it anywy
            next(error)
        }
    }   
})

// $$ description
//route    /api/users
//$$ access public 
const loginUser = asyncHandler ( async (req,res) =>{
    res.send('Login Routes')

})

module.exports = {
    registerUser,
    loginUser
}