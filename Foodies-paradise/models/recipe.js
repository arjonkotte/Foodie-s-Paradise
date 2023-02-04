const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: {type: String, required: true},
    review: {type: String, required: true},
    starRating: {type: Number, required: true},
}, {
    timestamps: true
})

module.exports = mongoose.model('Review', reviewSchema)

const recipeSchema = new Schema({
    title: {type: String, required: true},
    instructions: {type: String, required: true},
    prepTime: {type: String, required: true},
    ingredients: {type: [], required: true},
    reviews: [reviewSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)