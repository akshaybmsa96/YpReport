var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//purchase schema

var receivedPaymentSchema = mongoose.Schema({

       date : String,
       amount : Number,
       fromCentre : String,
       fromCentreId : String,
       centreId : String,
       modeOfPayment  : String,
       from  : String,
       to  : String,
       toAcId : String

}, {
  versionKey: false
});

 // Items = mongoose.model('Items',itemsSchema);

 module.exports = mongoose.model('ReceivedPayment',receivedPaymentSchema);
