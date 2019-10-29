const mongoose = require('mongoose');
const workschema = new mongoose.Schema({
    description : {
           type : String,
           required : true
    },
    catagoery : {

        type :String,
        required : true

    },
    date : {
        type : Date,
        required : true

    }
  });

  const  Work = mongoose.model('Work', workschema);

  module.exports = Work;