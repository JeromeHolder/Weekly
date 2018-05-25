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
    tableName: 'authors',

    books: function(){
        return this.hasMany(Book) //Each author has many books
    }
});

const Book = bookshelf.Model.extend({
    tableName: 'books',

    author: function(){
        return this.belongsTo(Author) //Each book has one author
    }
});

// Let's create a book written by one of the authors in the authors db
    // 1. Use model like a constructor to create an instance of that model
// let newBook = new Book({
//     title: "Foundation and Empire",
//     author_id: 1
// });

// 2. call .save() on that instance which actually saves it to the db
// newBook.save()
//        .then(savedBook => {
//            console.log(savedBook);
//        })
//        .catch(err => {
//            console.log(err);
//        });


// HERE IS THE POWER OF ORM'S
    // 1. we tell it all the relationships between tables
    // 2. we can ask it to do things with relations, because it understands
Author.where({id:1})
      .fetch({withRelated: 'books'})
      .then(results => {
          console.log(results.attributes, results.relations.books.models);
      })
      .catch(err => {
          console.log(err);
      });

// app.post('/authors', (req, res)=>{
//     let newAuthor = req.body;
//     // To create a new row in our table:
//     // 1. Call model like a constructor to get one instance
//     // Pass the model all the data for your new row
//     let newWriter = new Author(newAuthor);

//     newWriter.save()
//         .then(savedAuthor =>{
//             // console.log(savedAuthor.attributes);
//             res.json(savedAuthor.attributes);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// });


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
// app.get('/authors', (req, res)=>{
//     Author.where({})
//           .fetchAll()
//           .then(results => {
//               res.json(results);
//           })
//           .catch(err => {
//               console.log(err);
//           });
// });


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