
var mongoose = require('mongoose');
var Items = mongoose.model('Items');


module.exports.getItems=function(centreId,centreAdminId,callback){
  Items.find({$or: [{centreId : centreId} , {centreId : centreAdminId}]},callback);
}

module.exports.getItemById=function(id,callback){
  Items.findById(id,callback);
}

module.exports.getItemByName=function(name,callback){
  Items.find({itemName:name},callback);
}


module.exports.addItem=function(data,callback){
  Items.create(data,callback);
}

module.exports.updateItem=function(data,callback){
    Items.update({_id : data["_id"]},data,callback);
}
