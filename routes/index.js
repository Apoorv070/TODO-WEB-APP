//routes 
//including express server
const express = require('express');
const router = express.Router();

//route for the home page
const homeController = require('../controller/home_controller');
router.get('/',homeController.firstpage);

//route for adding the task
const  addtaskcontroller = require('../controller/addtask_controller');
router.post('/addtask' , addtaskcontroller.addedtask);

//route for deleteing the task
const deltaskcontroller = require('../controller/deltask_controller');
router.post('/delete-contact',deltaskcontroller.deltask);

//exporting the file
module.exports = router;