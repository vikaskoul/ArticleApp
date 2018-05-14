var mongoose = require('mongoose');
var categorySchema = mongoose.Schema({
	name:{
		type: String,
		required: true,
		index: true
	},
	body:{
		type: String
	}
});

var Category = module.exports = mongoose.model('Category',categorySchema);


//Reading Articles Methods
// Getting All articles, getting article by Id and by category
module.exports.getCategories = function(callback){
	//console.log("article model");
	Category.find(callback);
}

module.exports.getCategoryById = function(id, callback){
	Category.findById(id,callback);
}

module.exports.createNewCategory = function(newCategory , callback){
	newCategory.save(callback);
}

module.exports.getAllArticlesByCategory = function(category, callback){
	var q = {category: category};
	Article.find(q, callback);
}