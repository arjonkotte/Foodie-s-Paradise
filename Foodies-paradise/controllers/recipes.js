const recipe = require('../models/recipe')


function index(req,res) {
    recipe.find({}, function(err, recipes) {
    res.render('recipes/index', {title: 'All Recipes', recipes})
    });
}

function newRecipe (req, res) {
    res.render('recipes/new',  { title: 'Add Recipe' })
}





module.exports = {
    index,
    new: newRecipe
}