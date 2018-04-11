
var report = require('../controllers/report');
var items = require('../controllers/items');
var report = require('../controllers/report');
var vendor = require('../controllers/vendor');
var employee = require('../controllers/employee');
var purchase = require('../controllers/purchase');
var expense = require('../controllers/expense');
var attendance = require('../controllers/attendance');
var centre = require('../controllers/centre');
var account = require('../controllers/account');
var accountLog = require('../controllers/accountlog');
var receivedpayment = require('../controllers/receivedpayment');
var materialdistribution = require('../controllers/materialdistribution');
var stock = require('../controllers/stock');




module.exports = function(app) {

//items routes
app.get('/api/items/centreId=:centreId&centreAdminId=:centreAdminId',items.getItems);
app.get('/api/items/id=:_id',items.getItemById);
app.get('/api/items/itemName=:itemName',items.getItemByName);
app.post('/api/items/',items.addItem);
app.put('/api/items',items.updateItem);

//user report Routes

app.get('/api/report/centre=:centre&fromdate=:fromdate&todate=:todate',report.getCentrereport);
app.get('/api/itemUsagereport/centre=:centre&fromdate=:fromdate&todate=:todate',report.getItemUsagereport);
app.get('/api/todayreport/centre=:centre&date=:date',report.getTodayreport);
app.post('/api/report/',report.submitreport);

//admin report routes
app.get('/api/reportAdmin/centreAdminId=:centreAdminId&fromdate=:fromdate&todate=:todate',report.getAdminCentrereport);
app.get('/api/itemUsageAdminreport/centreAdminId=:centreAdminId&fromdate=:fromdate&todate=:todate',report.getAdminItemUsagereport);



//employee
app.post('/api/employee/',employee.addemployee);
app.get('/api/employee/centre=:centre',employee.getemployee);
app.put('/api/employee/',employee.updateEmployee);
app.get('/api/employee/id=:id',employee.getEmployeeById);
app.put('/api/employee/id=:id&amount=:amount',employee.updateBalance);



//vendor
app.post('/api/vendor/',vendor.addVendor);
app.get('/api/vendor/centre=:centre',vendor.getVendors);
app.put('/api/vendor/',vendor.updateVendor);


//purchase

//app.post('/api/purchase/',purchase.purchaseEntry);
app.get('/api/purchase/centre=:centre&fromdate=:fromdate&todate=:todate',purchase.getpurchaseEntry);
app.post('/api/purchase/id=:id&amount=:amount&itemId=:itemId',purchase.purchaseEntry);
app.put('/api/purchase/id=:id&amount=:amount&itemId=:itemId',purchase.deletePurchaseEntry);




//expense

//app.post('/api/expense/',expense.expenseEntry);
app.get('/api/expense/centre=:centre&fromdate=:fromdate&todate=:todate',expense.getexpenseEntry);
app.post('/api/expense/type=:type&id=:id&amount=:amount',expense.expenseEntry);



//attendance
app.post('/api/attendance/',attendance.submitAttendance);
app.delete('/api/attendance/date=:date&centre=:centre',attendance.removeTodayAttendance);
app.get('/api/attendance/centre=:centre&fromdate=:fromdate&todate=:todate',attendance.getAttendance);
app.get('/api/attendancedetail/id=:id&centre=:centre&fromdate=:fromdate&todate=:todate',attendance.getEmployeeAttendance);
app.get('/api/attendance/centre=:centre&date=:date',attendance.getTodayAttendance);

//centre
app.post('/api/store/',centre.addstore);
app.put('/api/store/',centre.updatestore);
app.get('/api/store/adminId=:adminId',centre.getstores);


//login
app.get('/api/login/centrecode=:centrecode&not=:not',centre.login);



//accounts
app.post('/api/account/',account.addAccount);
app.get('/api/account/centre=:centre',account.getAccounts);
app.put('/api/account/',account.updateAccount);

//accountLog

app.get('/api/accountlog/centre=:centre&fromdate=:fromdate&todate=:todate',accountLog.getLog);
app.post('/api/accountlog/',accountLog.addLog);



//received receivedPaymentSchema

app.post('/api/receviedpayment/centreId=:centreId&toAcId=:toAcId',receivedpayment.receivedPaymentEntry);
app.get('/api/receivedpayment/centre=:centre&fromdate=:fromdate&todate=:todate',receivedpayment.getreceivedPaymentEntry);
app.put('/api/receviedpayment/centreId=:centreId&toAcId=:toAcId',receivedpayment.deleteReceivedPaymentEntry);


//material MaterialDistribution

app.post('/api/materialdistribution/centreId=:centreId&amount=:amount',materialdistribution.materialDistributionEntry);
app.get('/api/materialdistribution/centre=:centre&fromdate=:fromdate&todate=:todate',materialdistribution.getmaterialDistributionEntry);
app.put('/api/materialdistribution/centreId=:centreId&amount=:amount',materialdistribution.deleteMaterialDistributionEntry);


//stock
app.post('/api/stock/',stock.addStock);
app.get('/api/stock/centreId=:centreId',stock.getStock);
app.put('/api/stock',stock.updateStock);

}
