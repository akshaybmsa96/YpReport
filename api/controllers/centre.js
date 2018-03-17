Centre = require('../service/centre');


exports.login = function(req,res){
Centre.login(req.params.centrecode,req.params.not,function(err,data){
  if(err)
  {
    throw err;
  }
  else{
    res.json({"items" : data});
  }

});
};

exports.addstore = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Centre.addstore(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send('1');
  }

});
};

exports.getstores = function(req,res){
Centre.getstores(req.params.adminId,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};

exports.updatestore = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Centre.updatestore(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send('1');
  }

});
};
