
const Work = require('../models/work') ;

module.exports.addedtask = function(req,res){
    
    Work.create(req.body,function (err,work) {
        if(err){
        console.log(err) ;
        return;
        }

        console.log(work);
        return res.redirect('back') ;
    })
    
};
