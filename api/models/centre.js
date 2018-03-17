var mongoose = require('mongoose');

//item schema

var centreSchema = mongoose.Schema({


  centre : String,
  centreCode : String,
  type : String,
  creditLimit : Number,
  gstNumber : String,
  centreCode : String,
  phoneNumber : String,
  currentBalance : Number,
  adminId : String


}, {
  versionKey: false
});


 module.exports = mongoose.model('Centre',centreSchema);
