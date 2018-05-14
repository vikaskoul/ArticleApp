var mongoose = require('mongoose');
var articleSchema = mongoose.Schema({
	title:{
		type: String,
		required: true,
		index: true
	},
	category:{
		type: String,
		index: true,
		required: true
	},
	body:{
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

var Article = module.exports = mongoose.model('Article',articleSchema);


//Reading Articles Methods
// Getting All articles, getting article by Id and by category
module.exports.getArticles = function(callback){
	//console.log("article model");
	Article.find(callback);
}

module.exports.getArticleById = function(id, callback){
	Article.findById(id,callback);
}

module.exports.getAllArticlesByCategory = function(category, callback){
	var q = {category: category};
	Article.find(q, callback);
}

// Creating new Article
module.exports.createNewArticle = function(newArticle , callback){
	newArticle.save(callback);
}

//Updating an existing article
module.exports.updateArticle = function(articleId, articleData , callback){
	var queryData = {_id: articleId};
	var newTitle = articleData.title;
	var newBody = articleData.body;
	var newCategory = articleData.category;
	Article.findById(articleId, function(e, article){
		if(!article){ return next(new Error('Article not found!!'))}
		else{ 
			article.title = newTitle;
			article.body = newBody;
			article.category = newCategory;
			article.save(callback);
		}
	});
}

//Delete Article
module.exports.deleteArticle = function(articleId, callback){
/*	var queryData = {_id: articleId};
	Article.findById(id, function(e, article){
		if(!article){ return next(new Error('Unable to delete Article !!'))}
		else{ 
			article.remove(callback);
		}
	}); */
	Article.find({_id: articleId}).remove(callback);
}