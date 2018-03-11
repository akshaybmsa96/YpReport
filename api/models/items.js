var mongoose = require('mongoose');

//item schema

var itemsSchema = mongoose.Schema({

id: String,
itemName: String,
cost_per_unit: String,
unit: String

}, {
  versionKey: false
});

 // Items = mongoose.model('Items',itemsSchema);

 module.exports = mongoose.model('Items',itemsSchema);


// get items
