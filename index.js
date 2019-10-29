//including the express js 
const express = require('express');

//connecting to the port
const port = 8000;

//setting the connection with mongoose
const db = require('./config/mongoose');
const Work = require('./models/work');

const app = express();


//setting up for an view enjine

//isuue 1:what is the diffrence between these 2 lines and bottom most lines giving diffrent error in both the cases 
//in the uper lines not able to find in the directory
//app.set('view engine','ejs');
//app.set('views','./views/home');

app.set('view engine','ejs');
app.set('views','./views');

//setting up the middleware
app.use(express.urlencoded());
app.use(express.static('assets'));

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