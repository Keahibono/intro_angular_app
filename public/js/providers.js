(function (){
  angular
    .module("myApp")
    .provider('Movies', function (){
        this.$get = function ($resource){
          return $resource('/api');
        };
    });
})();