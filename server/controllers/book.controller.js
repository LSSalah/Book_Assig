const {Book} = require('../models/book.model');

module.exports.findAllBooks = (req,res) =>{
    Book.find({})
    .then(allBooks => res.json(allBooks))
    .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.findOneBook = (req,res) => {
    Book.findOne({_id: req.params.id})
    .then(book => res.json(book))
    .catch(err => res.json(err));
}

module.exports.createBook = (req,res) => {
    const {name , book} = req.body;
    Book.create({
        name,
        book
    })
    .then(newBook => res.json(newBook))
    .catch(err => res.status(400).json(err))
}


module.exports.deleteBook = (req,res) => {
    Book.deleteOne({_id: req.params.id})
    .then(deleteBook => res.json(deleteBook))
    .catch(err => res.json(err));
}