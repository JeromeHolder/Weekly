const express = require('express'),
      app = express(),
      coffeeRoutes = require('./routes/coffeeRoutes');
app.use(express.json());
// app.use(express.urlencoded({extended:false}));

app.use('/coffee', coffeeRoutes);

let chineseTeas = [
    {
        name: 'Jasmine',
        flavour: 'floral'
    }
];

let indianTeas = [
    {
        name: 'assam',
        flavour: 'earthy'
    }
];

app.get('/teas/chinese', (req, res)=>{
    res.json(chineseTeas);
});

app.post('/teas/chinese', (req, res)=>{
    console.log(req.body);
    chineseTeas.push(req.body);
    res.json(chineseTeas);
});

app.get('/teas/indian', (req, res)=>{
    res.json(indianTeas);
});

app.post('/teas/indian', (req, res)=>{
    indianTeas.push(req.body);
    res.json(indianTeas);
})

app.listen(8080, ()=>{console.log('Server running on 8080')});