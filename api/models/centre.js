var mongoose = require('mongoose');

//item schema

var centreSchema = mongoose.Schema({

  _id : String,
  centre : String,
  centreCode : String

}, {
  versionKey: false
});


 module.exports = mongoose.model('Centre',centreSchema);
