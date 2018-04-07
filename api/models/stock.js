var mongoose = require('mongoose');

//item schema

var stockSchema = mongoose.Schema({

itemName : String,
unit : String,
associatedItem : [{
  itemId : String,
  itemName : String,
  itemUnit : String
}],
lowerLimit : Number,
upperLimit : Number,
currentStatus : Number,
centreId : String

} , {
  versionKey: false
});

 // Items = mongoose.model('Items',itemsSchema);

 module.exports = mongoose.model('Stock',stockSchema);


// get items
