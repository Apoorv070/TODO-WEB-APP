module.exports.firstpage = function(req,res){
    return res.render('home',{//issue 1 fail to find the home directory
        title:'Todoapp'
    });
};