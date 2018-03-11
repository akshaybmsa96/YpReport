var mongoose = require('mongoose');
var Vendor = mongoose.model('Vendor');


module.exports.addvendor=function(data,callback){
  Vendor.create(data,callback);
}

module.exports.getvendors=function(centre,callback){
    Vendor.find({centre : centre},callback);
}

module.exports.updateVendor=function(data,callback){
    Vendor.update({_id : data["_id"]},data,callback);
}

module.exports.updateBalance=function(id,amount,callback){
  Vendor.update({_id : id },{ $inc : {currentBalance : amount}},callback);
}
