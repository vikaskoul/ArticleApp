angular.module("myArticleLib")

.controller('ArticlesController', ['$scope','$http', function($scope, $http){
	$http({
      method: 'GET',
      url: '/articles'
   	}).then(function (response){
		$scope.articles = response.data;
   	},function (error){
   		console.log(error);
   	});
}])

.controller('ArticleDetailsController', ['$scope','$http','$routeParams','$location', function($scope, $http,$routeParams,$location){
	$http({
      method: 'GET',
      url: '/articles/'+ $routeParams.id
   	}).then(function (response){
		$scope.articleDetails = response.data;
   	},function (error){
   		console.log(error);
   	});

   	$scope.removeArticle = function(){
   		$http({
	      method: 'post',
	      url: '/articles/'+ $routeParams.id
	   	}).then(function (response){
			$location.path('/articles');
	   	},function (error){
	   		console.log(error);
	   	});
   	}
}])

.controller('ArticlesAddController', ['$scope','$http','$routeParams','$location', function($scope, $http ,$routeParams, $location){
	$scope.addArticle = function(){
		var articleData = {
			title: $scope.title,
			category: $scope.category,
			body: $scope.body
		}
		$http({
	      method: 'POST',
	      url: '/articles',
	      data: articleData
	   	}).then(function (response){
			$location.path('/articles');
	   	},function (error){
	   		console.log(error);
	   	});

	}
   	$http({
      method: 'GET',
      url: '/categories'
   	}).then(function (response){
		$scope.categories = response.data;
   	},function (error){
   		console.log(error);
   	});
}])

.controller('ArticlesEditController', ['$scope','$http','$routeParams','$location', function($scope, $http ,$routeParams, $location){
	$http({
      method: 'GET',
      url: '/categories'
   	}).then(function (response){
		$scope.categories = response.data;
   	},function (error){
   		console.log(error);
   	});

	$http({
      method: 'GET',
      url: '/articles/'+ $routeParams.id
   	}).then(function (response){
		$scope.article = response.data;
   	},function (error){
   		console.log(error);
   	});

	$scope.updateArticle = function(){
		var newData = {
			id: $routeParams.id,
			title: $scope.article.title,
			category: $scope.article.category,
			body: $scope.article.body
		}
		$http({
	      method: 'post',
	      url: '/articles',
	      data: newData
	   	}).then(function (response){
			$location.path('/articles');
	   	},function (error){
	   		console.log(error);
	   	});
	}
}])

.controller('ArticlesCategoryController', ['$scope','$http','$routeParams', function($scope, $http,$routeParams){
	$http({
      method: 'GET',
      url: '/articles/category/'+ $routeParams.category
   	}).then(function (response){
   		$scope.catgryName = $routeParams.category;
		$scope.Catgry_articles = response.data;
   	},function (error){
   		console.log(error);
   	});
}]);


