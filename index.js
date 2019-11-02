//including the express server
const express = require('express');

//connecting to the port
const port = 8000;

//setting the connection with mongoose
const db = require('./config/mongoose');

//including the Work schema from models
const Work = require('./models/work');

//setting app for the access of express now app will contain all the features that express have
const app = express();


//setting up for an view enjine
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