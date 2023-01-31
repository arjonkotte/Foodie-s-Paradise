const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: String,
    ingredients: [],
    ingredientsQty: [],
    instructions: String,
    prepTime: Number,
})

module.exports = mongoose.model('Recipe', recipeSchema)