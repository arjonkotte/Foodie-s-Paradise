var express = require('express');
var router = express.Router();

const recipeCtrl = require('../controllers/recipes')

/* GET home page. */
router.get('/', recipeCtrl.index);
router.get('/new', recipeCtrl.new)

module.exports = router;