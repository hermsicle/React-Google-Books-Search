const express = require('express');
const router = express.Router();
const db = require('../models');

//Create api get request to see all books
router.get("/books", (req, res) => {
    db.GoogleBooks.find().then(books => {
        res.send(books)
    })
})

//Create api post request to post books
router.post("/books", (req, res) => {
    db.GoogleBooks.create({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
    }).then(newBook => {
        res.send(newBook)
    })
})

//Create api delete request to delete specific books
router.delete("/books:id", (req, res) => {
    db.GoogleBooks.deleteOne({
        _id: req.params.id
    }).then(() => {
        res.send("success")
    })
})

module.exports = router;