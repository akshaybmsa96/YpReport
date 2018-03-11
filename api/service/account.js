var mongoose = require('mongoose');
var Account = mongoose.model('Account');



module.exports.addAccount=function(data,callback){
  Account.create(data,callback);
}


module.exports.getAccounts=function(centre,callback){
  Account.find({centre : centre},callback);
}


module.exports.updateAccount=function(data,callback) {
  Account.update({_id : data["_id"] },data,callback);
}


module.exports.updateBalance=function(id,amount,callback){
  Account.update({_id : id },{ $inc : {currentBalance : amount}},callback);
}
