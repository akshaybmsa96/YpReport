
Items = require('../service/items');


exports.getItems = function(req,res){
Items.getItems(function(err,items){
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
  var data=req.body;
Items.addItem(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};
