
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



module.exports = function(app) {

//items routes
app.get('/api/items/',items.getItems);
app.get('/api/items/id=:_id',items.getItemById);
app.get('/api/items/itemName=:itemName',items.getItemByName);
app.post('/api/items/',items.addItem);

//user report Routes

app.get('/api/report/centre=:centre&fromdate=:fromdate&todate=:todate',report.getCentrereport);
app.get('/api/itemUsagereport/centre=:centre&fromdate=:fromdate&todate=:todate',report.getItemUsagereport);
app.get('/api/todayreport/centre=:centre&date=:date',report.getTodayreport);
app.post('/api/report/',report.submitreport);

//admin report routes
app.get('/api/report/fromdate=:fromdate&todate=:todate',report.getCentrereport);



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
app.post('/api/purchase/id=:id&amount=:amount',purchase.purchaseEntry);



//expense

//app.post('/api/expense/',expense.expenseEntry);
app.get('/api/expense/centre=:centre&fromdate=:fromdate&todate=:todate',expense.getexpenseEntry);
app.post('/api/expense/type=:type&id=:id&amount=:amount',expense.expenseEntry);



//attendance
app.post('/api/attendance/',attendance.submitAttendance);
app.delete('/api/attendance/date=:date&centre=:centre',attendance.removeTodayAttendance);
app.get('/api/attendance/centre=:centre&fromdate=:fromdate&todate=:todate',attendance.getAttendance);
app.get('/api/attendancedetail/id=:id&centre=:centre&fromdate=:fromdate&todate=:todate',attendance.getEmployeeAttendance);


//login

app.get('/api/login/centrecode=:centrecode',centre.login);



//accounts
app.post('/api/account/',account.addAccount);
app.get('/api/account/centre=:centre',account.getAccounts);
app.put('/api/account/',account.updateAccount);

//accountLog

app.get('/api/accountlog/centre=:centre&fromdate=:fromdate&todate=:todate',accountLog.getLog);
app.post('/api/accountlog/',accountLog.addLog);



}
