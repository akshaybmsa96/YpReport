var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//purchase schema

var receivedPaymentSchema = mongoose.Schema({

       date : String,
       amount : Number,
       fromCentre : String,
       centreId : String,
       modeOfPayment  : String,
       from  : String,
       to  : String

}, {
  versionKey: false
});

 // Items = mongoose.model('Items',itemsSchema);

 module.exports = mongoose.model('ReceivedPayment',receivedPaymentSchema);
