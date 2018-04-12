Expense = require('../service/expense');
Vendor = require('../service/vendor');
Employee = require('../service/employee');
Account = require('../service/account');


//add employee
exports.expenseEntry = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
  fromAcId=data["fromAcId"];
  amount = data["amount"];
Expense.expenseEntry(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
  //  res.send('1');

  if(req.params.type=="Vendor")
  {

  Vendor.updateBalance(req.params.id,-1*amount,function(err,data){
    if(err)
    {
      throw err;
    }

    else{

      Account.updateBalance(fromAcId,-1*amount,function(err,data){
        if(err)
        {
          throw err;
        }

        else{
          res.send("1");
        }

      });
      //
    //  res.send("1");
    }

  });
}

else if(req.params.type=="Employee") {
  Employee.updateBalance(req.params.id,-1*amount,function(err,data){
    if(err)
    {
      throw err;
    }

    else{

      //

      Account.updateBalance(fromAcId,-1*amount,function(err,data){
        if(err)
        {
          throw err;
        }

        else{
          res.send("1");
        }

      });
    //  res.send("1");
    }

  });
}

else {

  //

  Account.updateBalance(fromAcId,-1*amount,function(err,data){
    if(err)
    {
      throw err;
    }

    else{
      res.send("1");
    }

  });
    //    res.send('1');
}


  }

});
};


exports.getexpenseEntry = function(req,res){
Expense.getexpenseEntry(req.params.centre,req.params.fromdate,req.params.todate,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};


//deleteExpenseEntry


exports.deleteExpenseEntry = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
  fromAcId=data["fromAcId"];
  amount = data["amount"];
Expense.deleteExpenseEntry(data["_id"],function(err,data){
  if(err)
  {
    throw err;
  }

  else{
  //  res.send('1');

  if(req.params.type=="Vendor")
  {

  Vendor.updateBalance(req.params.id,amount,function(err,data){
    if(err)
    {
      throw err;
    }

    else{

      Account.updateBalance(fromAcId,amount,function(err,data){
        if(err)
        {
          throw err;
        }

        else{
          res.send("1");
        }

      });
      //
    //  res.send("1");
    }

  });
}

else if(req.params.type=="Employee") {
  Employee.updateBalance(req.params.id,amount,function(err,data){
    if(err)
    {
      throw err;
    }

    else{

      //

      Account.updateBalance(fromAcId,amount,function(err,data){
        if(err)
        {
          throw err;
        }

        else{
          res.send("1");
        }

      });
    //  res.send("1");
    }

  });
}

else {

  //

  Account.updateBalance(fromAcId,amount,function(err,data){
    if(err)
    {
      throw err;
    }

    else{
      res.send("1");
    }

  });
    //    res.send('1');
}


  }

});
};
