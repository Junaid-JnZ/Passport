const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express()

//  const db = require("./config/keys").MongoURI;

//  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
//  .then(() => console.log('MongoDB Connected...'))
//  .catch(err => console.log(err));

app.use(expressLayouts);
app.set('view engine', 'ejs');


app.use('/', require('./routes/index'))
app.use('/user', require('./routes/user'))
//app.use('/register', require('./routes/user'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log("Server is working on port "+ PORT))