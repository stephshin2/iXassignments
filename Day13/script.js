var app = angular.module('tensionApp', ['ngRoute', 'firebase']); 


app.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  });
}]);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'HomeCtrl',
		templateUrl: 'templates/home.html',
		resolve: {
      // controller will not be loaded until $requireSignIn resolves
      // Auth refers to our $firebaseAuth wrapper in the example above
      "currentAuth": function($firebaseAuth) {
        // $requireSignIn returns a promise so the resolve waits for it to complete
        // If the promise is rejected, it will throw a $stateChangeError (see above)
        return $firebaseAuth().$requireSignIn();
      }
    }
  		
	})
	$routeProvider.when('/channel/:channelId/', {
		controller: 'ChannelCtrl',
		templateUrl: 'templates/channel.html',
		resolve: {
      // controller will not be loaded until $requireSignIn resolves
      // Auth refers to our $firebaseAuth wrapper in the example above
      "currentAuth": function($firebaseAuth) {
        // $requireSignIn returns a promise so the resolve waits for it to complete
        // If the promise is rejected, it will throw a $stateChangeError (see above)
        return $firebaseAuth().$requireSignIn();
      }
    }
	})
	$routeProvider.when('/signup', {
		controller: 'SignUpCtrl',
		templateUrl: 'templates/signup.html',
	})
	$routeProvider.when('/login', {
		controller: 'LogInCtrl',
		templateUrl: 'templates/login.html',

	})


});


app.controller('HomeCtrl', function($firebaseAuth, currentAuth, $scope, $firebaseObject, $routeParams) {

	var ref = firebase.database().ref().child('channels');
	$scope.channels = $firebaseObject(ref);
	$scope.channelId = $routeParams.channelId;
	$scope.authObj = $firebaseAuth();

	// $scope.channels.name = "Tense";
	// $scope.channels.description = "Discussion of all things tense";
	// $scope.channels.$save();

	// $scope.channels.name = "Relaxed";
	// $scope.channels.description = "Discussion of all things relaxed";
	// $scope.channels.$save();

	// $scope.channels.name = "Extra";
	// $scope.channels.description = "Discussion of all things extra";
	// $scope.channels.$save();


	});

app.controller('ChannelCtrl', function($scope, $firebaseArray, $routeParams) {

	var ref = firebase.database().ref().child('messages').child($routeParams.channelId);
	$scope.messages = $firebaseArray(ref);
	$scope.currchannel = $routeParams.channelId;
	$scope.sendMessage = function() {
		$scope.messages.$add({
			sender: $scope.userName,
			text: $scope.newMessage,
			created_at: Date.now()
		});


	
	};

	$scope.newMessage="";

	console.log($scope.message);
});

app.controller('SignUpCtrl', function($location, $scope, $firebaseArray, $firebaseObject, $routeParams, $firebaseAuth) {


	$scope.authObj = $firebaseAuth();


	$scope.signUp = function() {
		console.log($scope.name);
		console.log($scope.email);
		console.log($scope.password);
		$scope.errorMessage = "";
		$scope.successMessage = "";
	
	
	$scope.authObj.$createUserWithEmailAndPassword($scope.email, $scope.password)
		.then(function(firebaseUser) {
			var ref = firebase.database().ref().child('users').child(firebaseUser.uid);
			$scope.users = $firebaseObject(ref);
			$scope.users.name= $scope.name;
			$scope.users.$save();
			$scope.successMessage = "Welcome to Tension, " + $scope.name + "!";
		
		}).catch(function(error) {
			console.log("Error:" , error);
			$scope.errorMessage = error.message;
		});

	}

});

app.controller('LogInCtrl', function($location, $scope, $firebaseArray, $firebaseObject, $routeParams, $firebaseAuth) {


	$scope.authObj = $firebaseAuth();
	$scope.currUser = $scope.authObj; 
	console.log($scope.currUser);


	$scope.login = function() {
		$scope.errorMessage = "";
		$scope.successMessage = "";


	$scope.authObj.$signInWithEmailAndPassword($scope.email, $scope.password)
		.then(function(firebaseUser) {
			$scope.successMessage = "Signed in as:" + $scope.email;
			console.log("Signed in as: " + $scope.email);

		}).catch(function(error) {
			console.log("Authentication failed:" , error);
			$scope.errorMessage = error.message;
		});

	}

});



