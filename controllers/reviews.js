const recipe = require('../models/recipe')

function create (req, res) {
    recipe.findById(req.params.id, function (err, recipe){
        recipe.reviews.push(req.body)
        recipe.save(function(err) {
            res.render('recipes/show', {title: recipe.title, recipe})
        })

    })
}

module.exports = {
    create,
}