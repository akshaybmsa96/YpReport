
var mongoose = require('mongoose');
var Report = mongoose.model('Report');


module.exports.submitreport=function(data,callback){
  Report.update({date : data["date"],centre : data["centre"]},data,{upsert : true},callback);
}

module.exports.getTodayreport=function(centre,date,callback){
  Report.findOne({date : date, centre : centre },callback);
}

/*

module.exports.getCentrereport=function(centre,fromdate,todate,callback){
  Report.findOne({date : date, centre : centre },callback);
}

*/

module.exports.getCentrereport = function(centre,fromdate,todate,callback){
  Report.aggregate([{$match: {$and : [{ date: { $gte: fromdate}}, {date : {$lte: todate}},{centre : centre} ]}},
    {$group : {_id : "$centre",sale : {$sum : "$sale"},
  orders : { $sum : "$orders"}, materialCost : {$sum : "$materialCost"}}}],callback);
}

module.exports.getItemUsagereport = function(centre,fromdate,todate,callback){
  Report.aggregate([{$match: {$and : [{ date: { $gte: fromdate}}, {date : {$lte: todate}},
    {centre : centre} ]}}, {$unwind : "$itemUsage"},
    {$group : { _id : { "itemName" : "$itemUsage.itemName", "unit" : "$itemUsage.unit"} , qty : { $sum :"$itemUsage.qty"},
    totalItemCost : {$sum : "$itemUsage.totalItemCost"} }}],callback);
}

/*

module.exports.getCentrereport=function(centre,fromdate,todate,callback){
  Report.aggregate([{$group :
  {_id : "$centre",sale : {$sum : "$sale"},orders :
  { $sum : "$orders"}, materialCost : {$sum : "$materialCost"}}}],callback);
}

{ "itemName" : "$itemUsage.itemName", "unit" : "$itemUsage.unit"}

db.reports.aggregate({$group :
{_id : "$centre",sale : {$sum : "$sale"},orders :
{ $sum : "$orders"}, materialCost : {$sum : "$materialCost"}}})


db.reports.aggregate([{$match: {$and : [{ date: { $gte: "07-02-2018"}}, {date : {$lte: "07-02-2018"}},{centre : "RDC Ghaziabad"} ]}},
  {$group : {_id : "$centre",sale : {$sum : "$sale"},
orders : { $sum : "$orders"}, materialCost : {$sum : "$materialCost"}}}]);


db.reports.aggregate([{$match: {$and : [{ date: { $gte: "07-02-2018"}},
{date : {$lte: "07-02-2018"}},{centre : "RDC Ghaziabad"} ]}},
{$group : {_id : "$centre",sale : {$sum : "$sale"}, orders : { $sum : "$orders"},
materialCost : {$sum : "$materialCost"}}}])



db.reports.aggregate([ {$unwind : "$itemUsage"},{$group : {_id : "$itemUsage.itemName",
qty : { $sum :"$itemUsage.qty"},totalItemCost : {$sum : "$itemUsage.totalItemCost"} , unit : {"$itemUsage.unit"} }}])



db.reports.aggregate([{$match: {$and : [{ date: { $gte: "07-02-2018"}},
{date : {$lte: "07-02-2018"}},{centre : "RDC Ghaziabad"} ]}}, {$unwind : "$itemUsage"},{$group :
{_id : { "itemName" : "$itemUsage.itemName", "unit" : "$itemUsage.unit"}, qty : { $sum :"$itemUsage.qty"},
totalItemCost : {$sum : "$itemUsage.totalItemCost"} }}])

db.reports.aggregate([ {$unwind : "$itemUsage"},{$group :
{_id : "$itemUsage.itemName", qty : { $sum :"$itemUsage.qty"},
totalItemCost : {$sum : "$itemUsage.totalItemCost"} }}])



{$group :
{_id : "$centre")
*/
