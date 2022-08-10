const { Schema, model } = require('mongoose');
//const dateFormat = require('../utils/dateFormat');
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    }
})

const User = model("User", userSchema);

module.exports = User;