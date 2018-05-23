const mongoose = require('mongoose'),
      express = require('express'),
      app = express(),
      Kitten = require('./models/Kitten');

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
Kitten.findById('5b058af16f1e0118bc0e77b1')
      .then(result => {
          if(!result){
              console.log('Found nothing'); //result will be null if nothing is found
          }
          console.log(result);
      })
      .catch(err => {
          console.log(err);
      });