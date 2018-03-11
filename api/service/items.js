
var mongoose = require('mongoose');
var Items = mongoose.model('Items');


module.exports.getItems=function(req,limit){
  Items.find(req).limit(limit);
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
