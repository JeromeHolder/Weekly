const express = require('express');
const app = express();
// middleware
app.use(express.static('static'));

app.get('/', function(req, res){
    res.send("Hello World!");
});

app.get('/name', function(req, res){
    res.send("Jerome");
});

app.get('/sum', function(req, res){
    let sum = parseInt(req.query.a) + parseInt(req.query.b) + parseInt(req.query.c);
    res.send(sum.toString());
});

app.get('/color', function(req, res){
    let obj = {red:0, green:79, blue:255};
    res.json(obj);
});

app.listen(8080, function() {
    console.log("The server is running on port 8080.\nPress CTRL+C to stop server.");
});