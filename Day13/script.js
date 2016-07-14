var app = angular.module('tensionApp', ['ngRoute', 'firebase']); 

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'HomeCtrl',
		templateUrl: 'templates/home.html',
	})
	$routeProvider.when('/channel/:channelId/', {
		controller: 'ChannelCtrl',
		templateUrl: 'templates/channel.html',
	})

});

app.controller('HomeCtrl', function($scope, $firebaseArray, $routeParams) {

	var ref = firebase.database().ref().child('channels');
	$scope.channels = $firebaseArray(ref);


	console.log($scope.channels);
	
	});

app.controller('ChannelCtrl', function($scope, $firebaseArray, $routeParams) {

	var ref = firebase.database().ref().child('messages').child($routeParams.channelId);
	$scope.messages = $firebaseArray(ref);
	$scope.sendMessage = function() {
		$scope.messages.$add({
			text: $scope.userName,
			sender: $scope.newMessage,
			created_at: Date.now()
		});

	
	};

	$scope.newMessage="";

	console.log($scope.message);
});





