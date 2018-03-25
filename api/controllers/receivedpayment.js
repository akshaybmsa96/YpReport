ReceivedPayment = require('../service/receivedpayment');
Account = require('../service/account');
Centre = require('../service/centre');

exports.receivedPaymentEntry = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
  amount = data["amount"];
ReceivedPayment.receivedPaymentEntry(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
//    res.send('1');


Centre.updateBalance(req.params.centreId,-1 * amount,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
  //  res.send('1');

  Account.updateBalance(req.params.toAcId, amount ,function(err,data){
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

  }

});
};

exports.getreceivedPaymentEntry = function(req,res){

ReceivedPayment.getreceivedPaymentEntry(req.params.centre,req.params.fromdate,req.params.todate,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};
