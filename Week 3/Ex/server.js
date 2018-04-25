// initialize Express in project
const express = require('express');
const app = express();

const one_day_ms = 8640000;
// this lets Express know where to serve static content from
app.use(express.static('public', {
    maxAge: one_day_ms // this sets the cache lifetime of files in the public directory
}));


// when the server receives a GET request to '/' ->'/' is the root URL
app.get('/', (req, res) => {
    // send some text back as a response
    // res.send('Express is running!');

    // send a file back as a response
    // it loads the specified file
    return res.sendFile(__dirname + '/index.html');
});


// when the server receives a GET request to '/greeting'
app.get('/greeting', (req, res) => {
    res.send('Hello World');
});


// start Express on port 8080
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});