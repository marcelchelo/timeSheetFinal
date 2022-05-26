// const asyncHandler = require('express-async-handler')

// // we get the token of the user that either logged in or signed up 




// // Get list of all sites
// //@ route  GET/api/sites
// //@ access is Private

// const getSites = asyncHandler(async (req,res) =>{
//     res.status(200).json({message: "get Sites"})
// })



// //create new Site 
// //@ route  POST/api/sites
// //@ access is Private
// const createSite = asyncHandler(async (req,res) =>{
//     res.status(200).json({message:"create Site"})
// })


// module.exports = {
//     createSite,
//     getSites
// }

// //view all workers


// // view 


const asyncHandler = require('express-async-handler')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



//Get All sites
const getSites = asyncHandler(async(req,res) =>{
    

    const sites = await prisma.fingerDevice.findMany({
        where: {
            userID : req.userID
        },
        select:{
            siteName: true,
            id: true,
            userID: true,
        }
    })

    if(JSON.stringify(sites) === '[]' || !sites){
        res.status(401)
        throw new Error('No sites exist')
    }

    res.status(200).json({Sites: sites})
    //find all where user id is same as the requested user
}) 


//post
// @ /api/dash/createSite
const createSite = asyncHandler(async(req,res) =>{
    const {siteName} = req.body
    console.log(req.body)
    
    if(!siteName){
        res.status(400)
        throw new Error ('Plese add a site name')
    }

    const newSite = await prisma.fingerDevice.create({
        data:{
            siteName: siteName,
            userID: req.userID   //from jwt
        }
    })

    if(!newSite){
        res.status(401)
        throw new Error("Site was not created")
    }

    res.status(201).json({message: `site ${siteName} was created `})


}) 

const delSite = asyncHandler(async(req,res) =>{
    res.status(200).json({message: 'delete sites'})
}) 


module.exports = {
    getSites,
    createSite,
    delSite
}