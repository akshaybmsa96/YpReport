var mongoose = require('mongoose');

//purchase schema

var expenseSchema = mongoose.Schema({

      date : String,
      type  : String,
      name  : String,
      nameId : String,
      category  : String,
      modeOfPayment  : String,
      from  : String,
      fromAcId : String,
      to  : String,
      amount : Number,
      centreId : String,
      centre : String

}, {
  versionKey: false
});

 // Items = mongoose.model('Items',itemsSchema);

 module.exports = mongoose.model('Expense',expenseSchema);
