const express = require('express'),
      router = express.Router();
router.use(express.json());
// router.use(express.urlencoded({extended:false}));

let africanCoffees = [
    {
        name: 'nigerian',
        flavour: 'good'
    }
];

let americanCoffees = [
    {
        name: 'canadian',
        flavour: 'bad'
    }
];

// African
router.get('/african', (req, res)=>{
    res.json(africanCoffees);
});

router.post('/african', (req, res)=>{
    // Validation should go here
    africanCoffees.push(req.body);
    res.json(africanCoffees);
});

// American
router.get('/american', (req, res)=>{
    res.json(americanCoffees);
});

router.post('/american', (req, res)=>{
    // Validation should go here
    americanCoffees.push(req.body);
    res.json(americanCoffees);
});

// Export router so main (index.js) can require it in and use it
module.exports = router;