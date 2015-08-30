(function (){
  angular.module('myApp')
  .controller('myController', ['$scope', function($scope){
    $scope.myModel = "Hello";
  }]);
})();