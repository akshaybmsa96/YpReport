var mongoose = require('mongoose');

//item schema

var itemsSchema = mongoose.Schema({

itemName : String,
unit : String,
purchasePrice : Number,
sellingPrice : Number,
costingPrice : Number,
tax : Number,
centreId : String,
centreAdminId : String,
centre : String

}, {
  versionKey: false
});

 // Items = mongoose.model('Items',itemsSchema);

 module.exports = mongoose.model('Items',itemsSchema);


// get items
