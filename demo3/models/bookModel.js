// import mongoose from 'mongoose';
let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookModel = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    }
})
module.exports = mongoose.model('Books', bookModel, 'Book');