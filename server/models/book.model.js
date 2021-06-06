const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
        name: {
            type: String,
        },
        book: {
            type: String,
            
        }

    },
    {timestamps: true}
);


module.exports.Book = mongoose.model("Book", BookSchema);