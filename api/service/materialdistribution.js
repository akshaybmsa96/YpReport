var mongoose = require('mongoose');
var MaterialDistribution = mongoose.model('MaterialDistribution');

module.exports.materialDistributionEntry=function(data,callback){
  MaterialDistribution.create(data,callback);
}


module.exports.getmaterialDistributionEntry=function(centre,fromdate,todate,callback){
  MaterialDistribution.find({$and : [{ date: { $gte: fromdate}}, {date : {$lte: todate}},{centreAdminId : centre} ]},callback).sort( { date : -1 });
}