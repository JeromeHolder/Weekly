const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/welcome/:name', function(req, res) {
    res.render('welcome', {user: req.params.name})
})

app.use(express.static('public'));

app.listen(8080, function(){
    console.log('The server is running on port: 8080\nPress CTRL + C to exit.')
})