const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


// $$ description
//route    /api/users
//$$ access public 

const checkUser = asyncHandler( async(req,res, next) =>{
    const {name, email, password} = req.body
   
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please include all fields')
    }

    next()
})


// $$ description
//route    /api/users
//$$ access public 

const registerUser = asyncHandler( async (req,res,next ) =>{
  //add error hanlder for when i cant connect to db and for when there is no user 
  
    try {
        const userEmail = await prisma.user.findUnique({
            where: {
                id: 10
            }
        })
        console.log('connected to DB')

        if( Object.keys(userEmail).length >= 1 ){
            return res.json(userEmail)     
         }
        
    } catch (error) {
        res.status(400)
        console.log(`Error: ${error.message}`)
        throw new Error('No user with Such ID exists or Cant fetch DB data')
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
    loginUser,
    checkUser
}