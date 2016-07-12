var app = angular.module('chommiesApp', ['ngRoute']); 

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'FeedCtrl',
		templateUrl: 'templates/feed.html',
	})

});

app.controller('FeedCtrl', function($scope, $http) {

	console.log($scope.item);
	$http({
	    method: "GET",
	    url: "http://ixchommies.herokuapp.com/props",
	    params: {
       		token: "be9378d11b18ca40c4823c7cb7fb9813"
	    }
	  }).then(function(response) {
	  
	  	$scope.props = response.data;
	  })

	$http({
	    method: "GET",
	    url: "http://ixchommies.herokuapp.com/brus",
	    params: {
       		token: "be9378d11b18ca40c4823c7cb7fb9813"
	    }
	  }).then(function(response) {
	  	console.log(response);
	  	$scope.brus = response.data;
	  })

	  $scope.sendProps = function() {
	  	console.log($scope.newPropsValue);
	  	console.log($scope.selectedBru);
	  }

});






