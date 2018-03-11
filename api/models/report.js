var mongoose = require('mongoose');

//item schema

var reportSchema = mongoose.Schema({

id: String,
centre : String,
date : String,
orders : Number,
sale : Number,
materialCost : Number,
itemUsage : [{
          id: Number,
          itemName : String,
          qty : Number,
          costPerUnit : String,
          totalItemCost : Number,
          unit : String
}]


}, {
  versionKey: false
});

 // Items = mongoose.model('Items',itemsSchema);

 module.exports = mongoose.model('Report',reportSchema);


// get items
