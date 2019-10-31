const Work = require('../models/work');
module.exports.deltask = function(req,res){


    console.log(req.body.deleteIds);




    Work.deleteMany({_id:{$in:req.body.deleteIds}},function(err) {
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