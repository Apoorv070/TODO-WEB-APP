
    const Work = require('../models/work');



    module.exports.addedtask = function(req,res){
        
        Work.create(req.body,function (err,work) { 
            
            

            if(err){
            console.log(err) ;
            return;  
            }
        
        /*     
        var today = new Date(req.body.date); 
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
            } 
        if (mm < 10) {
            mm = '0' + mm;
        }     
        var today = dd + '/' + mm + '/' + yyyy;
            
        console.log(today);

    */
            console.log(work);
            return res.redirect('back') ;
        })
        
    };
