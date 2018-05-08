var express = require('express');
var app=express();
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var config = require('./config/config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


//connect to Mongoose
mongoose.connect(config.db);
var db=mongoose.connection;
 var ItemModel = require('./models/items');
 var ReportModel = require('./models/report');
 var VendorModel = require('./models/vendor');
 var EmployeeModel = require('./models/employee');
 var PurchaseModel = require('./models/purchase');
 var AttendanceModel = require('./models/attendance');
 var ExpenseModel = require('./models/expense');
 var CentreModel = require('./models/centre');
 var AccountModel = require('./models/account');
 var AccountLogModel = require('./models/accountlog');
 var ReceivedPaymentModel = require('./models/receivedpayment');
 var MaterialDistributionModel = require('./models/materialdistribution');
 var StockModel = require('./models/stock');

Routes = require('./config/routes')(app);


app.get('/',function(req,res){
  res.send("Hello Brother! Welcome to Node Project");
});


app.listen(3000,'0.0.0.0');
console.log('Running on 3000');
