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
    req.body.ingredients = req.body.ingredients.split(',');
    
    
    const img = new image ({
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        contentType: 'image/png'
    })

    const newRecipe = new recipe({
        title: req.body.title,
        instructions: req.body.instructions,
        prepTime: req.body.prepTime,
        ingredients: req.body.ingredients,
        image: img,
        reviews: [reviewSchema]
    })
    newRecipe.save(function(err) {
    if(err) return res.redirect('/recipes/new');
    
    res.redirect('recipes');
    })
}

function show (req, res){
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