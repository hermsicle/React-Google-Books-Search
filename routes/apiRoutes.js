const express = require('express');
const router = express.Router();
const db = require('../models');

//Create api get request to see all books
router.get("/books", (req, res) => {
    db.GoogleBooks.find().then(books => {
        //console.log(books)
        res.json(books)
    })
})

//Create api post request to post books
router.post("/books", (req, res) => {
    db.GoogleBooks.create({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
    }).then(newBook => {
        console.log(newBook)
        res.json(newBook)
    })
})

//create route to findOne book 
router.get('/find/:id', (req, res) => {
    db.GoogleBooks.findOne({})
        .then(foundBook => {
            console.log(foundBook)
            res.json(foundBook)
        })
})

//Create api delete request to delete specific books
router.delete("/delete/:id", (req, res) => {
    db.GoogleBooks.deleteOne({
        _id: req.params.id
    }).then(() => {
        console.log("success")
        res.json("success")
    })
})



module.exports = router;