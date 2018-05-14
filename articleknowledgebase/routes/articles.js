var express = require('express');
var router = express.Router();
var Article = require('../models/article');

//Getting all articles
router.get('/', function(req, res, next) {
  Article.getArticles(function(e, articles){
  	if(e){ console.log(e); }
  	res.json(articles);
  });
});
//Getting article by article id
router.get('/:articleId', function(req, res, next) {
  Article.getArticleById(req.params.articleId,function(e, article){
  	if(e){ console.log(e); }
  	res.json(article);
  });
});
//Getting all articles by category
router.get('/category/:categoryName', function(req, res, next) {
  Article.getAllArticlesByCategory(req.params.categoryName,function(e, articles){
  	if(e){ console.log(e); }
  	res.json(articles);
  });
});

//Creating article
router.post('/', function(req, res, next) {
    var newArticleObject = new Article({
      title : req.body.title,
      body : req.body.body,
      category : req.body.category
    });
    Article.createNewArticle(newArticleObject, function(e, article){
        if(e){ console.log(e); }
        res.location('/articles');
        res.redirect('/articles');
    });
});

//Updating article
router.post('/', function(req, res, next) {
    console.log("put called");
    var articleId = req.body.id;
    var articleData = {
      title : req.body.title,
      body : req.body.body,
      category : req.body.category
    };

    Article.updateArticle(articleId, articleData, function(e, article){
        if(e){ console.log(e); }
        res.location('/articles');
        res.redirect('/articles');
    });
});

//Deleting article
router.post('/:articleId', function(req, res, next) {
    var articleId = req.params.articleId;
    Article.deleteArticle(articleId, function(e, article){
        if(e){ console.log(e); }
        res.location('/articles');
        res.redirect('/articles');
    });
});

module.exports = router;
