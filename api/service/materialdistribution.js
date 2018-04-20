var mongoose = require('mongoose');
var MaterialDistribution = mongoose.model('MaterialDistribution');

module.exports.materialDistributionEntry=function(data,callback){
  MaterialDistribution.create(data,callback);
}


module.exports.getmaterialDistributionEntry=function(centre,fromdate,todate,callback){
  MaterialDistribution.find({$and : [{ date: { $gte: fromdate}}, {date : {$lte: todate}},{centreAdminId : centre} ]},callback).sort( { date : -1 });
}

module.exports.deleteMaterialDistributionEntry=function(id,callback){
  MaterialDistribution.remove({_id : id},callback);
}

module.exports.getCentrematerialDistributionEntry=function(centre,fromdate,todate,callback){
  MaterialDistribution.find({$and : [{ date: { $gte: fromdate}}, {date : {$lte: todate}},{centreId : centre} ]},callback).sort( { date : -1 });
}
