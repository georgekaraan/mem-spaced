const express = require("express"),
    app = express(),
    mongoose = require('mongoose'),
    cors = require('cors'),
    { set, connect } = require('mongoose'),
    { json, urlencoded } = require('express'),
    userRoute = require('./routes/user.route.js'),
    memoryRoute = require('./routes/memory.route.js'),
    users = require('./models/user.model.js'),
    memories = require('./models/memory.model.js')


require('dotenv').config()

set('debug', true)
app.use(json())
app.use(urlencoded({ extended: true }));
app.use(cors())


// cnnect to mongoose db
async function connecting() {
    try {
        await connect(`mongodb+srv://geewizz:${process.env.PASS}@mem-spaced.ov6ix3g.mongodb.net/mem-spaced?retryWrites=true&w=majority`)
        console.log('Connected to the DB')
    } catch (error) {
        console.log(error, 'ERROR: Seems like your DB is not running, please start it up !!!');
    }
}
connecting()


app.use('/user', userRoute);
app.use('/memory', memoryRoute);

let port = process.env.PORT || 4010

app.listen(port, () => console.log(`listening on port ${port}`))