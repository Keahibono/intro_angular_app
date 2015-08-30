(function (){
  angular
  .module('myApp')
  .controller('myController', ['$scope', 'myAppTitle', function($scope, myAppTitle){
    $scope.myModel = "Hello";
    $scope.title = myAppTitle;
  }]);
})();