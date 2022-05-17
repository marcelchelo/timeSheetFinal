const asyncHandler = require('express-async-handler')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const checkUser = asyncHandler( async(req,res, next) =>{
    const {name, email, password} = req.body
   
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please include all fields')
    }

    next()
})




const registerUser = asyncHandler( async (req,res ) =>{
    const users = await prisma.user.findUnique({
        where: {
            id: 2
        }
    })
    if(users !== null){
       res.json(users)     
    }else{
        res.status(204)
        throw new Error('User id returned Null')   
    }
 })

// $$ description
//route    /api/users
//$$ access public 


// ORIGINAL CODE, But now it is more readable in my opinionn

// const registerUser = asyncHandler( async (req,res,next ) =>{
//    const {name, email, password} = req.body
   
//     if(!name || !email || !password){
//         res.status(400)
//         throw new Error('Please include all fields')
//     }else{
//         try {
//             //try inserting a user here// either.  reate a newfunction.s  
//             const users = await prisma.user.findMany({})
//             res.json(users)
       
//         } catch (error) {  
//              //since I'm using ayncHandler, this is not needed. But lets leave it anywy
        
//              next(error)
//         }
//     }   
// })

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