var mongoose = require('mongoose');
var Centre = mongoose.model('Centre');


module.exports.login=function(centrecode,callback){
  Centre.findOne({centreCode : centrecode},callback);
}
