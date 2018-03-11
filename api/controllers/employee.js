
Employee = require('../service/employee');

exports.updateEmployee = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Employee.updateEmployee(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send('1');
  }

});
};

//add employee
exports.addemployee = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Employee.addemployee(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send('1');
  }

});
};


exports.getemployee = function(req,res){
Employee.getemployee(req.params.centre,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};



exports.getEmployeeById = function(req,res){
Employee.getEmployeeById(req.params.id,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};

exports.updateBalance = function(req,res){
Employee.updateBalance(req.params.id,req.params.amount,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send("1");
  }

});
};
