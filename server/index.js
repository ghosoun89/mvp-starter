var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
 var items = require('../database-mongo/index.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// UNCOMMENT FOR REACT
 app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));


app.post('/items', function(req, res){
  console.log('----------- req.body = ',req.body)
  items.save(req.body, function(err, data){
    console.log("from DB");
    res.send(data);
  });
});


app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.get('/1', function (req, res) {
  res.send("GHsoun")
});
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

