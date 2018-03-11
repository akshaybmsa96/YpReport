
AccountLog = require('../service/accountlog');
Account = require('../service/account');


//add employee
exports.addLog = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
  toAcId=data["toAcId"];
  fromAcId=data["fromAcId"];
  amount = data["amount"];



AccountLog.addLog(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
  //  res.send('1');

  Account.updateBalance(toAcId,amount,function(err,data){
    if(err)
    {
      throw err;
    }

    else if(fromAcId!="x"){
    //  res.send("1");

    Account.updateBalance(fromAcId,-1*amount,function(err,data){
      if(err)
      {
        throw err;
      }

      else{
        res.send("1");
      }

    });
    }

    else {
      res.send("1");
    }

  });
  }


});
};


exports.getLog = function(req,res){
AccountLog.getLog(req.params.centre,req.params.fromdate,req.params.todate,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};
