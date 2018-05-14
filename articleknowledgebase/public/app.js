var app = angular.module('myArticleLib',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/categories',{
			templateUrl: 'view/categories.view.html',
			controller: 'CategoriesController'
		})
		.when('/articles',{
			templateUrl: 'view/articles.view.html',
			controller: 'ArticlesController'
		})
		.when('/articles/detail/:id',{
			templateUrl: 'view/article.view.html',
			controller: 'ArticleDetailsController'
		})
		.when('/articles/category/:category',{
			templateUrl: 'view/category_articles.view.html',
			controller: 'ArticlesCategoryController'
		})
		.when('/articles/add',{
			templateUrl: 'view/add_article.view.html',
			controller: 'ArticlesAddController'
		})
		.when('/articles/edit/:id',{
			templateUrl: 'view/update_article.view.html',
			controller: 'ArticlesEditController'
		})
		.otherwise({redirectTo: '/categories'})
}]);