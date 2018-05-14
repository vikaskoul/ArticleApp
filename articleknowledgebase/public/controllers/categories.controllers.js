angular.module("myArticleLib")

.controller('CategoriesController', ['$scope','$http', function($scope, $http){
	$http({
      method: 'GET',
      url: '/categories'
   	}).then(function (response){
		$scope.categories = response.data;
   	},function (error){
   		console.log(error);
   	});
}]);