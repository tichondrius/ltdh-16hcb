const express = require('express');


const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://admin:123456@ds127389.mlab.com:27389/grab-fake');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Config routes
require('./routes')(app);


module.exports = app;

