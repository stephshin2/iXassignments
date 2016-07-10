var app = angular.module('groceryListApp', []); 

app.controller('groceryListCtrl', function($scope) {
  $scope.listItem = [];
  
  $scope.addItem = function() {
    var repeat = false;
     if(isNaN($scope.item) === false) {
        return;
      }

    for(var i=0; i<$scope.listItem.length; i++) {

      if($scope.listItem[i].name ===$scope.item.toLowerCase()) {
        $scope.listItem[i].quantity += parseInt($scope.quantity,10);
      repeat = true;
      }
    }
      if (repeat === false) {
    var newItem = {
      name: $scope.item.toLowerCase(),
      quantity: parseInt($scope.quantity),
      "isEditing": false
    };
    $scope.listItem.push(newItem);
    $scope.name = "";
    $scope.quantity = "";
   }

  }

  $scope.remove = function($index) {
    $scope.listItem.splice($index,1);
  };

  $scope.add = function(item) {
    item.quantity = parseInt(item.quantity);
    item.quantity = item.quantity + 1;
  };

  $scope.subtract = function(item) {
    console.log(item);
    if (parseInt(item.quantity) -1 >= 0) {
      item.quantity = parseInt(item.quantity) -1;
    }
  };

  $scope.cart = function() {
    $scope.listItem = [];
  }


});

