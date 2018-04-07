
var mongoose = require('mongoose');
var Stock = mongoose.model('Stock');

module.exports.addStock=function(data,callback){
  Stock.create(data,callback);
}

module.exports.getStock=function(centreId,callback){
  Stock.find({centreId : centreId},callback);
}

module.exports.updateQuantity=function(itemId,centreId,quantity,callback){
  Stock.update({"associatedItem.itemId" : itemId , centreId : centreId},{ $inc : { currentStatus : quantity }},callback);
}

module.exports.updateStock=function(data,callback){
    Stock.update({_id : data["_id"]},data,callback);
}
