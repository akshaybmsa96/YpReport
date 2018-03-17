var mongoose = require('mongoose');
var Centre = mongoose.model('Centre');


module.exports.login=function(centrecode,not,callback){
  Centre.findOne({centreCode : centrecode ,  type : {$ne : not}},callback);
}

module.exports.addstore=function(data,callback){
  Centre.create(data,callback);
}

module.exports.getstores=function(adminId,callback){
    Centre.find({adminId : adminId},callback);
}

module.exports.updatestore=function(data,callback){
    Centre.update({_id : data["_id"]},data,callback);
}


module.exports.updateBalance=function(id,amount,callback){
  Centre.update({_id : id },{ $inc : {currentBalance : amount}},callback);
}
