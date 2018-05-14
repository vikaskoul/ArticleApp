var express = require('express');
var router = express.Router();

var Category = require('../models/category');

//Getting all categories
router.get('/', function(req, res, next) {
  Category.getCategories(function(e, categories){
  	if(e){ console.log(e); }
  	res.json(categories);
  });
});
//Getting Category by category name
router.get('/:categoryId', function(req, res, next) {
	console.log("1");
  Category.getCategoryById(req.params.categoryId,function(e, article){
  	if(e){ console.log(e); }
  	res.json(article);
  });
});

module.exports = router;