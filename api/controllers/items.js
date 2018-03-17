
Items = require('../service/items');


exports.getItems = function(req,res){
Items.getItems(req.params.centreId,req.params.centreAdminId,function(err,items){
  if(err)
  {
    throw err;
  }
  else{
    res.json({"items" : items});
  }

});
};


exports.getItemById = function(req,res){
Items.getItemById(req.params._id,function(err,item){
  if(err)
  {
    throw err;
  }

else{
  res.json(item);
}

});
};

exports.getItemByName = function(req,res){
Items.getItemByName(req.params.itemName,function(err,item){
  if(err)
  {
    throw err;
  }

  else{
    res.json(item);

  }

});
};

//post item
exports.addItem = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Items.addItem(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send("1");
  }

});
};


exports.updateItem = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Items.updateItem(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send('1');
  }

});
};
