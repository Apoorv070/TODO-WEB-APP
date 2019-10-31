const mongoose = require('mongoose');
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

    }
  });

  const  Work = mongoose.model('Work', workschema);

  module.exports = Work;