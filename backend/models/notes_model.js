const mongoose = require('mongoose')

const note_schema = mongoose.Schema({
    title: String,
    content: String,
    category: String
},{timestamps: true})

const note_model = mongoose.model("Note", note_schema)

module.exports = note_model