//routes 
//including express server
const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');
router.get('/',homeController.firstpage);
const  addtaskcontroller = require('../controller/addtask_controller');
router.post('/addtask' , addtaskcontroller.addedtask);
module.exports = router;