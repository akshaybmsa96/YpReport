var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');


module.exports.addemployee=function(data,callback){
  Employee.create(data,callback);
}

module.exports.getemployee=function(centre,callback){
  Employee.find({centreId : centre},callback);
}


module.exports.updateEmployee=function(data,callback) {
  Employee.update({_id : data["_id"] },data,callback);
}

module.exports.getEmployeeById=function(id,callback){
  Employee.findById(id,callback).sort( { currentBalance : 1 });
}

module.exports.updateBalance=function(id,amount,callback){
  Employee.update({_id : id },{ $inc : {currentBalance : amount}},callback);
}


/*
db.employees.update({employeeName : "Akshay Sharma"},
{ $inc : {currentBalance : 2500}})
*/
