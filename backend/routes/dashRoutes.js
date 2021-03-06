const express = require("express");

const router = express.Router()
const {protect} = require ('../middleware/authMiddleware')
const {getSites, createSite,
        delSite, workersAtSite} = require('../controllers/dashboardController')
// const {getWorkers, createWorker,
//         getSites,createSite
//                                      } = require('../controllers/dashboardController')



// router.route('/workers').get(protect,getWorkers).post(protect,createWorker)
router.get('/getSites' , protect , getSites)
router.post('/createSite',protect, createSite)
router.delete('/delSite', protect, delSite)


// router.route('/sites').get(protect,getSites).post(protect,createSite)

//show last 15 workers at specific site 

router.get('/sites/:siteID', protect, workersAtSite)

module.exports = router