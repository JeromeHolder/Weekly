const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let dealData = {
    title: "Monday Funday Programmer's Special",
    description: "Half price Ruby on Rails",
    price: 2.99
};

app.get('/dailydeals', (req, res) =>{
    res.json(dealData);
})

app.listen(8080, ()=>{console.log("Server listening on port 8080");})