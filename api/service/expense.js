var mongoose = require('mongoose');
var Expense = mongoose.model('Expense');


module.exports.expenseEntry=function(data,callback){
  Expense.create(data,callback);
}


module.exports.getexpenseEntry=function(centre,fromdate,todate,callback){
  Expense.find({$and : [{ date: { $gte: fromdate}}, {date : {$lte: todate}},{centreId : centre} ]},callback).sort( { date : -1 });
}

module.exports.deleteExpenseEntry=function(id,callback){
  Expense.remove({ _id : id } ,callback);
}
