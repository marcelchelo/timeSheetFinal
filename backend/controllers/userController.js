const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken')

// $$ description
//route    /api/users
//$$ access public 

const checkUser = asyncHandler( async(req,res, next) =>{
    const {name, email, password, companyName} = req.body
   
    //validation 

    if(!name || !email || !password || !companyName){
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
    const companyName = req.body.companyName
    
    
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
               password:haschedPassword,
               companyName: companyName
           }
        })

        //if there is an user, generate a jwt token
        if(user) {
            res.status(201).json({
                message : `${user.companyName}  Your account was created`,
                token: generateToken(user.id)

            }
                )
        }//put below code in an else  statement instead. And test it. 

        if( !user ){
            res.status(400)
            throw new Error(`User wasn't created for some reason `)
         }    
 })


// $$ description
//route    /api/users
//$$ access public 
const loginUser = asyncHandler ( async (req,res) =>{
   const {email, password} = req.body

   const user = await prisma.user.findUnique({
       where:{
           email : email
       }
   })

   //check if user exist and user's  password matches the one in database. 
   if(user &&  await bcrypt.compare(password,user.password)){
        res.status(200).json({
            name: user.name,
            id: user.id,
            email: user.email,
            token: generateToken(user.id),
        })
   }else{
       res.status(401)
       throw new Error('Invalid Credentials')

   }

})


//Route     /api/users/dashboard
const userDashboard =  asyncHandler( async( req ,res )=> {
    res.status(200).json(req.user)

})


//Generate token using JWT

function generateToken (id) {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '8h'
    })
}

module.exports = {
    registerUser,
    loginUser,
    checkUser,
    userDashboard
}