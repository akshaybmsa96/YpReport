
Vendor = require('../service/vendor');


//add vendor
exports.addVendor = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Vendor.addvendor(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send('1');
  }

});
};


exports.getVendors = function(req,res){
Vendor.getvendors(req.params.centre,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};


exports.updateVendor = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Vendor.updateVendor(data,function(err,data){
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
Vendor.updateBalance(req.params.id,req.params.amount,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send("1");
  }

});
};
