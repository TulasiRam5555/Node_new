const express = require('express');
router = express.Router();

//const validations = require('../config/validator');



const clientsRoutes = require('../controllers/clientsCtrl');
const applicantsRoutes = require('../controllers/applicantsCtrl');




const rmq_routes=require('../controllers/rmqCtrl');
router.post("/RMQ_Q_GETMessage",rmq_routes.RMQ_Q_GETMessage);




/**************************************************************************************
* Description    : Clients API`s
***************************************************************************************/
router.post("/addclients", clientsRoutes.addclients);
router.post("/editclients", clientsRoutes.editclients);
router.post("/listclients", clientsRoutes.listclients);



/**************************************************************************************
* Description    : Applicants API`s
***************************************************************************************/
router.post("/addapplicants", applicantsRoutes.addapplicants);






module.exports = router;
