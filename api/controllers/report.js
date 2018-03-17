
Report = require('../service/report');


//post report
exports.submitreport = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Report.submitreport(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send('1');
  }

});
};

//get report one centre


exports.getTodayreport = function(req,res){

Report.getTodayreport(req.params.centre,req.params.date,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};


exports.getCentrereport = function(req,res){

Report.getCentrereport(req.params.centre,req.params.fromdate,req.params.todate,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};


exports.getItemUsagereport = function(req,res){

Report.getItemUsagereport(req.params.centre,req.params.fromdate,req.params.todate,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};

//admin Report
exports.getAdminCentrereport = function(req,res){
Report.getAdminCentrereport(req.params.centreAdminId,req.params.fromdate,req.params.todate,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};


exports.getAdminItemUsagereport = function(req,res){
Report.getAdminItemUsagereport(req.params.centreAdminId,req.params.fromdate,req.params.todate,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};
