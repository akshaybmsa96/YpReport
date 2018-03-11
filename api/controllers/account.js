
Account = require('../service/account');


//add employee
exports.addAccount = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Account.addAccount(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send('1');
  }

});
};


exports.getAccounts = function(req,res){
Account.getAccounts(req.params.centre,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};


exports.updateAccount = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Account.updateAccount(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send('1');
  }

});
};

exports.updateBalance = function(req,res){
Account.updateBalance(req.params.id,req.params.amount,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send("1");
  }

});
};
