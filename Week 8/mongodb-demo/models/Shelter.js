const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

// Step 1 - Make a schema
const shelterSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    capacity: {
        type: Number,
        required: true,
    },
    kittens: [{
        type: ObjectId,
        ref: 'Kitten' //This is required for populate() to work
    }],
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    }
});

// Step 2 - feed the schema into mongoose.model to create the model we actually interact with
const Shelter = mongoose.model('Shelter', shelterSchema);

module.exports = Shelter;