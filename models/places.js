const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pic: {
        type: String
    },
    cuisines: {
        type: String,
        required: true
    },
    city: {
        type: String,
        default: "Anytown"
    },
    state: {
        type: String,
        default: "USA"
    },
    founded: {
        type: Number
    }
})

module.exports = mongoose.model('Place', placeSchema)