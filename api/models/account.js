var mongoose = require('mongoose');

//item schema

var accountSchema = mongoose.Schema({

    accountName : String,
    type : String,
    currentBalance : Number,
    centre : String

}, {
  versionKey: false
});

 // Items = mongoose.model('Items',itemsSchema);

 module.exports = mongoose.model('Account',accountSchema);
