const mongoose = require('mongoose'),
      express = require('express'),
      app = express(),
      Kitten = require('./models/Kitten'),
      Shelter = require('./models/Shelter');

// Call .connect to connect to mongod server
mongoose.connect('mongodb://localhost/CatSOS');

const db = mongoose.connection;

db.on('open', ()=>{console.log('Connected to mongodb');});

// Create a new Kitten
// let anakin = Kitten({
//     name: "Keegan",
//     breed: "Domestic Short Hair",
//     age: 5,
//     color: 'white'
// });

// anakin.save()
//       .then(savedCat => {
//           console.log(savedCat);
//       })
//       .catch(err => {
//           console.log(err);
//       });

// Read back many kittens in DB
// Kitten.find({})
//       .then(results=>{
//           console.log(results);
//       })
//       .catch(err=>{
//           console.log('Throw ya hands up in the ' + err);
//       });

// Find one document by its ID
// Kitten.findById('5b058af16f1e0118bc0e77b1')
//       .then(result => {
//           if(!result){
//               console.log('Found nothing'); //result will be null if nothing is found
//           }
//           console.log(result);
//       })
//       .catch(err => {
//           console.log(err);
//       });


// Let's make a shelter
// let bs_floor2 = Shelter({
//     name: 'Chamber 36',
//     capacity: 36,
//     kittens: ['5b058af16f1e0118bc0e77b1', '5b058d0b93f1e90ed401c480']
// });

// bs_floor2.save()
//          .then(savedShelter => {
//              console.log(savedShelter);
//          })
//          .catch(err => {
//              console.log(err);
//          });

// Shelter.find({})
//        .populate('kittens')
//        .then(shelters => {
//            console.log(shelters[0].kittens);
//        })
//        .catch(err => {
//            console.log(err);
//        });

// Query for exact value on a field
// Find the cat with an age of 5
// Kitten.find({age:5, name: 'Keegan'})
//       .then(results => {
//           console.log(results);
//       })
//       .catch(err => {
//           console.log(err);
//       });

// Find all cats with an age greater than 5
// Kitten.find({age: { $gte: 5 } })  //$gte = greater than or equal to -- $gt greater than
//       .then(results => {
//           console.log(results);
//       })
//       .catch(err => {
//           console.log(err);
//       });

// Find the cats where age is 5 or name is Anakin
Kitten.find({
    $or: [
        {age:5},
        {name: 'Anakin'}  
    ]
})
.then(cats => {
    console.log(cats);
})
.catch(err => {
    console.log(err);
});