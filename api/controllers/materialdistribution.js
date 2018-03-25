MaterialDistribution = require('../service/materialdistribution');
Centre = require('../service/centre');

exports.materialDistributionEntry = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);

MaterialDistribution.materialDistributionEntry(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
//    res.send('1');


Centre.updateBalance(req.params.centreId,req.params.amount,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send('1');
  }

});

  }

});
};

exports.getmaterialDistributionEntry = function(req,res){

MaterialDistribution.getmaterialDistributionEntry(req.params.centre,req.params.fromdate,req.params.todate,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};
