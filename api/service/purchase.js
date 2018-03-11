var mongoose = require('mongoose');
var Purchase = mongoose.model('Purchase');


module.exports.purchaseEntry=function(data,callback){
  Purchase.create(data,callback);
}


module.exports.getpurchaseEntry=function(centre,fromdate,todate,callback){
  Purchase.find({$and : [{ date: { $gte: fromdate}}, {date : {$lte: todate}},{centre : centre} ]},callback).sort( { date : -1 });
}
