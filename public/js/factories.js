(function(){
  angular
    .module('myApp')
    .factory('CharacterVersionFactory', function (){
      return [{name: "Peter"}, {name: "Meg"}, {name: "Chris"}];
    });
})();