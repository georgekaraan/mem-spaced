const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    active_subsctiption: Boolean,
    mem: [String],
    time_setting: Date

}, { strictQuery: false })

module.exports = mongoose.model('users', usersSchema);