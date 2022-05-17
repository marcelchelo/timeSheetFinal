const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


// $$ description
//route    /api/users
//$$ access public 

const checkUser = asyncHandler( async(req,res, next) =>{
    const {name, email, password} = req.body
   
    //validation 

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please include all fields')
    }

    next()
})


// $$ description
//route    /api/users
//$$ access public 

const registerUser = asyncHandler( async (req,res ) =>{
  //add error hanlder for when i cant connect to db and for when there is no user 
    
    //find if User Already Exists
    const searchEmail = req.body.email
    const password = req.body.password
    const name =req.body.name
    
        const userExists = await prisma.user.findUnique({
            where: {
                email : searchEmail
            }
        })
        
        if( userExists ){
            res.status(400)
            throw new Error('User already exists')
         }

        //Hash Password
        const salt = await bcrypt.genSalt(10)
        const haschedPassword = await bcrypt.hash(password,salt)

        

        //create user
        const user = await prisma.user.create({
           data:{
               name: name,
               email:searchEmail,
               password:haschedPassword
           }
        })

        res.status(200).json("User Created")

        



        
     
    
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