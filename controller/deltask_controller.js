//controller for deleting the task
//  importing the Work schema
const Work = require('../models/work');

//controller function
//expoerting addedtask
module.exports.deltask = function(req,res){

//deleteTds is the array of all the deleted tasks as the id was given to deleting input checkbox in the ejs file
    console.log(req.body.deleteIds);

    Work.deleteMany({_id:{$in:req.body.deleteIds}},function(err) {
        if(err){
            console.log(err);
        }
        return res.redirect('back') ;
    })

// for( let id of req.body.deleteIds){

//      Work.findByIdAndDelete(id,function(err){
//          if(err){
//              console.log('ERROR');
//              return;
//          }
//             });
//         }

//         return res.redirect('back');

};