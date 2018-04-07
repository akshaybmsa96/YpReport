
Stock = require('../service/stock');

exports.addStock = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Stock.addStock(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send("1");
  }

});
};



exports.getStock = function(req,res){
Stock.getStock(req.params.centreId,function(err,data){
  if(err)
  {
    throw err;
  }
  else{
    res.json(data);
  }

});
};

exports.updateStock = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Stock.updateStock(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send('1');
  }

});
};


exports.updateQuantity = function(req,res){
Stock.updateQuantity(req.params.itemId,req.params.quantity,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send("1");
  }

});
};
