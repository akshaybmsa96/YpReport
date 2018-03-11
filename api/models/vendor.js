var mongoose = require('mongoose');
//item schema

var vendorSchema = mongoose.Schema({


vendorName: String,
address : String,
gstNumber : String,
creditLimit : Number,
phoneNumber : String,
centre : String,
currentBalance: Number

}, {
  versionKey: false
});

 // Items = mongoose.model('Items',itemsSchema);

 module.exports = mongoose.model('Vendor',vendorSchema);
