const BookController = require('../controllers/book.controller');

module.exports = function(app) {
    app.get('/api/books', BookController.findAllBooks);
    app.post('/api/books', BookController.createBook);
    app.get('/api/books/:id', BookController.findOneBook);
    app.delete('/api/books/:id', BookController.deleteBook);
}