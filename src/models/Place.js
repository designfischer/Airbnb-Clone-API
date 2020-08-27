const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    typeOf: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    features: {
        type: [String]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Place', Schema)