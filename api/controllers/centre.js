Centre = require('../service/centre');


exports.login = function(req,res){
Centre.login(req.params.centrecode,function(err,data){
  if(err)
  {
    throw err;
  }
  else{
    res.json({"items" : data});
  }

});
};
