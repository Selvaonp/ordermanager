import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/ordermanager');