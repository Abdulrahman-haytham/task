var express = require('express');
var app = express();
const path = require('path')
app.get('/', function(req, res){
res.send("Hello woooorld!");
// res.sendFile(path.join(__dirname,'public','index.html'))
});
// http://localhost:5500/
app.use(express.static(path.join(__dirname,'public')))
app.listen(5500);

// http://localhost:5500/index.html