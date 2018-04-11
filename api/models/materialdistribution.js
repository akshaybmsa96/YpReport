var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//purchase schema

var materialDistributionSchema = mongoose.Schema({


centre : String,
centreId : String,
centreAdminId : String,
date  : String,
itemName  : String,
itemId : String,
qty  : Number,
costPerUnit  : Number,
totalItemCost  : Number,
unit  : String

}, {
  versionKey: false
});

 // Items = mongoose.model('Items',itemsSchema);

 module.exports = mongoose.model('MaterialDistribution',materialDistributionSchema);
