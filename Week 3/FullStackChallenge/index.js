const express = require('express');
const app = express();
app.use(express.static('public'));
let fish = require(__dirname + '/public/fishdata.js');

// Because index.html exists and is in the public folder, it doesn't need a path handler
// I.e. when someone goes to '/' it will automatically load index.html
// app.get('/', (req, res) => {res.sendFile('index.html');});

app.get('/fish', (req, res) => {res.json(fish);});

app.listen(8080, () => {console.log("The server is running on port 8080.\nPress CTRL+C to exit.")});