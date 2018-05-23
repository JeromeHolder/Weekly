const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

// Step 1 - create our schema for our kitten collection
const kittenSchema = Schema({
    name: {
        type: String,
        unique: true
    },
    breed: String,
    age: Number,
    color: {
        type: String,
        required: true
    }
});

// Step 2 - feed our schema into the model function to create a model
const Kitten = mongoose.model('Kitten', kittenSchema);

module.exports = Kitten;