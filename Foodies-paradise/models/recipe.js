const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: String,
    instructions: String,
    prepTime: Number,
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)