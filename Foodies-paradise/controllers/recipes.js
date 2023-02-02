const recipe = require('../models/recipe')


function index(req,res) {
    recipe.find({}, function(err, recipes) {
    res.render('recipes/index', {title: 'All Recipes', recipes})
    });
}

function newRecipe (req, res) {
    res.render('recipes/new',  { title: 'Add Recipe'})
}

function create(req,res) {
    const newRecipe = new recipe(req.body)
    newRecipe.save(function(err) {
    if(err) return res.redirect('/recipes/new');
    
    res.redirect('recipes');
    })
}

function show (req, res){
    console.log(req.params.id)
    recipe.findById(req.params.id, function(err, recipe) {
        res.render('recipes/show', { title: recipe.title, recipe} )
    })
}




module.exports = {
    index,
    new: newRecipe,
    create,
    show
}