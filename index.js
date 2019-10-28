var express = require('express');
var app = express();
var port = 8000;

//setting up for an view enjine
//isuue 1:what is the diffrence between these 2 lines and bottom most lines giving diffrent error in both the cases 
//in the uper lines not able to find in the directory
//app.set('view engine','ejs');
//app.set('views','./views/home');

app.set('view engine','ejs');
app.set('views','./views');

//use express router
app.use('/',require('./routes/index'));


//checking wether servers respond or not
 app.listen(port,function(err){
     if(err)
     {
         console.log(`ERROR : ${err}`);
         return;
     }
     console.log(`yep the server is running on the port ${port}`);
 });