const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const suggestionSchema = new Schema({
        author: {type: String, required: true, max: 100},
        message: {type: String, required: true, max: 255},
    }
);

//Export model
module.exports = mongoose.model('Suggestion', suggestionSchema);