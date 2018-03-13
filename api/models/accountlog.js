var mongoose = require('mongoose');

//item schema

var accountLogSchema = mongoose.Schema({

    date : String,
    fromAc : String,
    toAc : String,
    amount : Number,
    centre : String,
    centreId : String

}, {
  versionKey: false
});

 // Items = mongoose.model('Items',itemsSchema);

 module.exports = mongoose.model('AccountLog',accountLogSchema);
