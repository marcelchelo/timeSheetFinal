//to allow only authorized users access certain routes

const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const protect = asyncHandler(async (req,res,next) => {
    let token

    //check for token in the headers
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //get token from header
            token =req.headers.authorization.split(' ')[1]

            //verify token 
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            //Get user from token
            req.user =  await prisma.user.findUnique({
                where: {
                    id : decoded.id
                },
                select:{
                    email:true,
                
                }
            })

            console.log(req.user.email  + " Has accesses a protected route.  Ln31   authmiddleware.js")

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error ('Not Authorized')
        }
    }

    if(!token){
        res.status(401)
        throw new Error ('Not Authorized')
    }
} ) 

module.exports = {
    protect
}