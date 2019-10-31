//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todoapp_dbb');

//acquire the connection to check if it is succesful or not 
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'connection error:'));

//up and running 
db.once('open', function() {
    // we're connected!
    console.log('connected to the database');
  });
