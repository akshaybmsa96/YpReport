var mongoose = require('mongoose');
var Attendance = mongoose.model('Attendance');



module.exports.submitAttendance=function(data,callback){
  Attendance.create(data,callback);
}

module.exports.removeTodayAttendance=function(date,centre,callback){
  Attendance.remove({$and : [{date : date},{centreId : centre}]},callback);
}

module.exports.getAttendance = function(centre,fromdate,todate,callback){
  Attendance.aggregate([{$match: {$and : [{ date: { $gte: fromdate}}, {date : {$lte: todate}},{centreId : centre} ]}},
    {$group : { _id : { "employeeId" : "$employeeId", "name" : "$name"},attendanceTotal : {$sum : "$attendance"}}}],callback);
}


module.exports.getEmployeeAttendance = function(id,centre,fromdate,todate,callback){
  Attendance.find({$and : [{employeeId : id },{ date: { $gte: fromdate}}, {date : {$lte: todate}},{centreId : centre}]},callback).sort( { date : -1 });
}



/*
db.attendances.find({$and : [{employeeId : "5a92b968f18e6e03f7c542eb" },{ date: { $gte: "2018-02-28"}}, {date : {$lte: "2018-02-28"}},{centre : "RDC Ghaziabad"}]}).pretty();


db.attendances.find({employeeId : "5a92b968f18e6e03f7c542eb" , date: { $gte: "2018-02-28"}, date : {$lte: "2018-02-28"},centre : "RDC Ghaziabad"}).pretty();


Attendance.find({employeeId : "id" , date: { $gte: fromdate}, date : {$lte: todate},centre : centre},callback);



db.attendances.aggregate([{$match: {$and : [{employeeId : "5a92b968f18e6e03f7c542eb" },{ date: { $gte: "2018-02-25"}}, {date : {$lte: "2018-02-28"}},{centre : "RDC Ghaziabad"}]} }]).pretty();
*/
