//just the upper layer of dbms making the schema in the models
//require the library
const mongoose = require('mongoose');

//making the work schema for my task 
const workschema = new mongoose.Schema({
    description : {
           type : String,
           required : true
    },
    category: {

        type :String,
        required : true

    },
    date : {
        type :String,
        required : true

    },

    priority : {
        type : Number,
        required :true
    }
  });

  const  Work = mongoose.model('Work', workschema);
  //expoerting the schema named as Work
  module.exports = Work;