(function (){
  angular
  .module('myApp')
  .controller('myController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', function($scope, myAppTitle, CharacterVersionFactory){
    $scope.myModel = "Hello";
    $scope.title = myAppTitle;
    $scope.characters = CharacterVersionFactory;
  }]);
})();