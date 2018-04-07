

Attendance = require('../service/attendance');


//add employee
exports.submitAttendance = function(req,res){
  var postData=req.body.data;
  data = JSON.parse(postData);
Attendance.submitAttendance(data,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send('1');
  }

});
};


exports.removeTodayAttendance = function(req,res){
Attendance.removeTodayAttendance(req.params.date,req.params.centre,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.send('1');
  }

});
};



exports.getAttendance = function(req,res){
Attendance.getAttendance(req.params.centre,req.params.fromdate,req.params.todate,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};


exports.getTodayAttendance = function(req,res){
Attendance.getTodayAttendance(req.params.centre,req.params.date,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};

exports.getEmployeeAttendance = function(req,res){
Attendance.getEmployeeAttendance(req.params.id,req.params.centre,req.params.fromdate,req.params.todate,function(err,data){
  if(err)
  {
    throw err;
  }

  else{
    res.json(data);
  }

});
};
