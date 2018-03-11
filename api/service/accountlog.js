var mongoose = require('mongoose');
var AccountLog = mongoose.model('AccountLog');



module.exports.addLog=function(data,callback){
  AccountLog.create(data,callback);
}

module.exports.getLog=function(centre,fromdate,todate,callback){
  AccountLog.find({$and : [{ date: { $gte: fromdate}}, {date : {$lte: todate}},{centre : centre} ]},callback).sort( { date : -1 });
}
