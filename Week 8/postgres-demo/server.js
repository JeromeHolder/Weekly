const express = require('express'),
      app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//allows CORS
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// require and configure knex first
const knex = require('knex')({
    client: 'postgres',
    connection: {
      host     : '127.0.0.1',
      user     : 'postgres',
      password : 'Se5MkcUX',
      database : 'bsspring2018',
      charset  : 'utf8'
    }
});
// then connect bookshelf with knex
const bookshelf = require('bookshelf')(knex);


// Create model
    // This model is capitalized because we use it like a constructor
    // This model will be our interface to the authors table from this moment forward
const Author = bookshelf.Model.extend({
    tableName: 'authors'
});


app.post('/authors', (req, res)=>{
    let newAuthor = req.body;
    // To create a new row in our table:
    // 1. Call model like a constructor to get one instance
    // Pass the model all the data for your new row
    let newWriter = new Author(newAuthor);

    newWriter.save()
        .then(savedAuthor =>{
            // console.log(savedAuthor.attributes);
            res.json(savedAuthor.attributes);
        })
        .catch(error => {
            console.log(error);
        });
});


// Retrieve author with id # I.E. Reading back a row
    // Take the model, call .where() and provide an object that specifies the criteria for what you want to get back
// Author.where({name: 'Isaac Asimov'}) //strings are case-sensitive
//       .fetch() //gives you the first thing that matches your criteria
//       .then(author => {
//           console.log(author.attributes);
//       })
//       .catch(err => {
//           console.log('Throw your hands up in the ' + err)
//       });


// This code shows how to grab many rows in conjunction with express
app.get('/authors', (req, res)=>{
    Author.where({})
          .fetchAll()
          .then(results => {
              res.json(results);
          })
          .catch(err => {
              console.log(err);
          });
});


// Author.where({}) //Empty object says give me everything
//       .fetchAll()  //gives you all the things that match your criteria
//       .then(result => {
//           console.log(result.models);
//       })
//       .catch(err => {
//           console.log(err);
//       });

// Updating a row
    // First make an object that holds our updated data
// let updatedAuthor = {name:'Ray Bradbury'}
//     // Use the model with 'new' to update the row
// new Author({id:2})
//     .save(updatedAuthor)
//     .then(result => {
//         console.log(result.attributes);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// Deleting a row
// new Author({id:2})
//     .destroy()
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err);
//     });


app.listen(8080, ()=>{console.log("Server running on 8080")});