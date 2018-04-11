var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//purchase schema

var purchaseSchema = mongoose.Schema({

       date : String,
       vendorName : String,
       vendorId : String,
       item : String,
       itemId : String,
       qty : Number,
       discount : Number,
       amount : Number,
       centre : String,
       centreId : String,
       unit : String

}, {
  versionKey: false
});

 // Items = mongoose.model('Items',itemsSchema);

 module.exports = mongoose.model('Purchase',purchaseSchema);
