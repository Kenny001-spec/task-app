const mongoose = require('mongoose');
const validator = require('validator');


// CREATING MONGOOSE MODEL
const Player = mongoose.model('Player', {
    fullName: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        validate(value) {
            if (value > 50) {
                throw new Error('You are too old to play!')
            }
        }
    },
    team: {
        type: String
    },
    jersey: {
        type: Number
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email');
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        validate(value) {
            if (value.includes('password')) {
                throw new Error('Password contain password')
            }
        }
    }

});

module.exports = Player