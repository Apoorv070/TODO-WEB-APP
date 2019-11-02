//controller for adding the task
//  importing the Work schema
    const Work = require('../models/work');


//controller function
//expoerting addedtask
    module.exports.addedtask = function(req,res){
        //creating the task in Work as a new object
        Work.create(req.body,function (err,work) { 
            
            if(err){
            console.log(err) ;
            return;  
            }
        
            console.log(work);
            //after creating contact we are again back at the home page
            return res.redirect('back') ;
        })
        
    };
