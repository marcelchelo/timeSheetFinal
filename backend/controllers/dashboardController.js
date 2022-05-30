const asyncHandler = require('express-async-handler')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



//Get All sites
//@ /api/dash/getSite
//private
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


//GET Single Site.   Display all workers there 
// @ /api/dash/sites/:siteID

const getSite = asyncHandler(async (req,res)=>{
    res.status(201).json({message: `Get workers `})
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
    delSite,
    getSite
}