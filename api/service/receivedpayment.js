var mongoose = require('mongoose');
var ReceivedPayment = mongoose.model('ReceivedPayment');

module.exports.receivedPaymentEntry=function(data,callback){
  ReceivedPayment.create(data,callback);
}


module.exports.getreceivedPaymentEntry=function(centre,fromdate,todate,callback){
  ReceivedPayment.find({$and : [{ date: { $gte: fromdate}}, {date : {$lte: todate}},{centreId : centre} ]},callback).sort( { date : -1 });
}


module.exports.getreceivedPaymentEntryCentre=function(centre,fromdate,todate,callback){
  ReceivedPayment.find({$and : [{ date: { $gte: fromdate}}, {date : {$lte: todate}},{fromCentreId : centre} ]},callback).sort( { date : -1 });
}

module.exports.deleteReceivedPaymentEntry=function(id,callback){
  ReceivedPayment.remove({_id : id},callback);
}
