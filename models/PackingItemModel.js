const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packingItemSchema = new Schema({
        Requester: {type: String, required: true, max: 100},
        ItemName: {type: String, required: true, max: 100},
        ItemDescription: {type: String, required: false, max: 255},
        IsPacked: {type: Boolean, required: true},
        Provider: {type: String, required: false, max: 100}
    }
);

//Export model
module.exports = mongoose.model('PackingItem', packingItemSchema);