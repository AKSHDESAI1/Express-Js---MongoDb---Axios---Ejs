const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    desc: {
        type: String,
        require: true,
        trim: true
    }
})

const Note = new mongoose.model("Note", noteSchema);

module.exports = Note;


// python is  a programming language