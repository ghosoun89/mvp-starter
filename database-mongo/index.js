var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test123@ds147190.mlab.com:47190/shopinglist');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  name: String,
   price : Number
});

var Item = mongoose.model('Item', itemSchema);

var save = (data, callback) => {
  Item.collection.insert( data , function(err, data){
    if(err){
      callback(err, null);
    } else{
      callback(null, data)
    }
  })
}

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.save = save;