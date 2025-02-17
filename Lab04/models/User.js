const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 4
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format'
        }
    },
    city: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[A-Za-z\s]+$/.test(v);
            },
            message: 'City can only contain alphabets and spaces'
        }
    },
    website: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return validator.isURL(v, { protocols: ['http','https'], require_protocol: true });
            },
            message: 'Invalid website URL. Must start with http:// or https://'
        }
    },
    zip: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{5}-\d{4}$/.test(v);
            },
            message: 'Zip code must be in format 12345-1234'
        }
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^1-\d{3}-\d{3}-\d{4}$/.test(v);
            },
            message: 'Phone must be in format 1-123-123-1234'
        }
    }
});

module.exports = mongoose.model('User', userSchema); 