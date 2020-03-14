const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String
    },
    authors: {
        type: Array

    },
    description: {
        type: String
    },
    image: {
        type: ''
    },
    link: {
        type: String
    }
})

const GoogleBooks = mongoose.model("GoogleBooks", BookSchema);

module.exports = GoogleBooks;