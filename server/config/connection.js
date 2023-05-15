const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');

module.exports = mongoose.connection;
