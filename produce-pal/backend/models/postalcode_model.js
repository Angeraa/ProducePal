const mongoose = require('mongoose');

const postalCodeItemsSchema = new mongoose.Schema({
    postalCode: {
        type: String,
        required: true
    },
    items: {
        type: [Object],
        default: [],
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const PostalCodeItems = mongoose.model('PostalCodeItems', postalCodeItemsSchema, "PostalCodeItems");

module.exports = PostalCodeItems;