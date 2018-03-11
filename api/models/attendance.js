var mongoose = require('mongoose');

//item schema

var attendanceSchema = mongoose.Schema({

  
    employeeId : String,
    name : String,
    attendance : Number,
    date : String,
    centre : String

}, {
  versionKey: false
});

 // Items = mongoose.model('Items',itemsSchema);

 module.exports = mongoose.model('Attendance',attendanceSchema);
