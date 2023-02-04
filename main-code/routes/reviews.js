var express = require('express');
var router = express.Router();

const reviewsCtrl = require('../controllers/reviews')

/* GET home page. */

router.post('/recipes/:id/reviews', reviewsCtrl.create);

module.exports = router;