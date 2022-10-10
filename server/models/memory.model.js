const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memoriesSchema = new Schema({

    title: String,
    content: String,
    date_created: Date,
    box: [{
        num: Number,
        active: Boolean,
        marked: Boolean,
        date_marked: Date
    }],
    schedule: Number

}, { strictQuery: false })

module.exports = mongoose.model('memories', memoriesSchema);