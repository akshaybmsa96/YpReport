Purchase = require('../service/purchase');
Vendor = require('../service/vendor');


//add employee
exports.purchaseEntry = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Purchase.purchaseEntry(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
  //  res.send('1');

  Vendor.updateBalance(req.params.id,req.params.amount,function(err,data){
    if(err)
    {
      throw err;
    }

    else{
      res.send("1");
    }

  });

  }

});
};

exports.getpurchaseEntry = function(req,res){

Purchase.getpurchaseEntry(req.params.centre,req.params.fromdate,req.params.todate,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};
