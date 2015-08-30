(function (){
  angular
  .module('myApp')
  .controller('myController', ['$scope', 'myAppTitle', 'APP_VERSION', function($scope, myAppTitle, APP_VERSION){
    console.log(APP_VERSION);
    $scope.myModel = "Hello";
    $scope.title = myAppTitle;
  }]);
})();