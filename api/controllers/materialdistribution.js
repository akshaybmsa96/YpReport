MaterialDistribution = require('../service/materialdistribution');
Centre = require('../service/centre');
Stock = require('../service/stock');

var ok=1;

exports.materialDistributionEntry = function(req,res){
  var postData=req.body.data;
  Jsondata = JSON.parse(postData);

MaterialDistribution.materialDistributionEntry(Jsondata,function(err,data){
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
    //res.send(Jsondata.length);

  for(var i = 0; i < Jsondata.length; i++) {

    itemId = Jsondata[i].itemId;
    quantity = -1*Number(Jsondata[i].qty);
    centreId = Jsondata[i].centreAdminId;

    Stock.updateQuantity(itemId,centreId,quantity,function(err,data){
      if(err)
      {
        throw err;
      }

      else{
      //  res.send("1");

      ok=1;
      }

    });

    }

    if(ok==1)
    {
    res.send("1");
  }

  else {
    res.send("0");
  }

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
