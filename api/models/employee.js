var mongoose = require('mongoose');

//employee schema

var employeeSchema = mongoose.Schema({


employeeName: String,
designation: String,
dateOfJoining: String,
phoneNumber: String,
address : String,
salary : Number,
centre : String,
leavesPerMonth : Number,
aadhaarNumber : String,
currentBalance : Number

}, {
  versionKey: false
});


 module.exports = mongoose.model('Employee',employeeSchema);
