var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var appRoutes = require('./routes/appRoutes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/meanDB').then(function(){
    console.log('success');
}, function(err) {
    console.log('error connect');
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use('/api', appRoutes);

// const server = http.createServer((app, res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.setHeader('X-Foo', 'bar');
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('MehdiFilban solved this problem\nYour Header is set NOW\nGOOD LUCK...');
// }).listen(port,()=>{
//     console.log('your app is started');
// });

http.createServer(app).listen(port);
console.log('backend running on port ---->' + port);