var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//purchase schema

var purchaseSchema = mongoose.Schema({

       date : String,
       vendorName : String,
       item : String,
       qty : Number,
       discount : Number,
       amount : Number,
       centre : String,
       unit : String

}, {
  versionKey: false
});

 // Items = mongoose.model('Items',itemsSchema);

 module.exports = mongoose.model('Purchase',purchaseSchema);
