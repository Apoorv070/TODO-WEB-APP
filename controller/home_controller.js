const Work = require('../models/work') ;

module.exports.firstpage = function(req,res){

    Work.find({},function (err,data) {

        return res.render('home',{
            title:'Todoapp',
            task:data
        });        
    })

};