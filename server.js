var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
     res.send('<h1>Hello Node.js</h1>');
 });

var todo = require('./public/todo/server.js')
app.use('/',todo)

var server = app.listen(8081,function (){})