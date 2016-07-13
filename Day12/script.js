var app = angular.module('chommiesApp', ['ngRoute']); 

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'FeedCtrl',
		templateUrl: 'templates/feed.html',
	})
	$routeProvider.when('/me/:brusId', {
		controller: 'MeCtrl',
		templateUrl: 'templates/me.html',
	})

});

app.controller('FeedCtrl', function($scope, $http) {
	$scope.isSending = false; 

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

	  $scope.sendProps = function(x, y) {
	  	console.log($scope.newPropsValue);
	  	console.log($scope.selectedBru);
	  	$scope.errorMessage = "";
	  	$scope.isSending = true;

	  	$http({
	    method: "POST",
	    url: "http://ixchommies.herokuapp.com/props",
	    params: {
       		token: "be9378d11b18ca40c4823c7cb7fb9813",
	    },
	    data: {
	    	for: x,
       		props: y,
	    }
	  }).then(function(response) {
	  	console.log(response);
	  	$scope.sentProp= response.data;
	  	$scope.props.unshift($scope.sentProp);
	  	$scope.selectedBru = "";
	  	$scope.newPropsValue = "";


	  }).catch(function(response) {
	  	$scope.errorMessage = response.data.message;
	  	$scope.newPropsValue = "";

	  }).finally(function(response) {
	  	$scope.isSending = false;

	  });
	



	}
});


app.controller('MeCtrl', function($scope, $http) {
	$http({
	    method: "GET",
	    url: "http://ixchommies.herokuapp.com/props/me",
	    params: {
    		token: "be9378d11b18ca40c4823c7cb7fb9813",
	    }
	  }).then(function(response) {
	  	console.log(response);
	  	$scope.myProp = response.data;
	  	console.log($scope.myProp);
	  })

	  });





