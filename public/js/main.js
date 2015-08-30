(function (){
  var app = angular.module('myApp', ['ngResource']);

  app.run(function($rootScope, APP_VERSION){
    $rootScope.APP_VERSION = APP_VERSION;
  });



})();