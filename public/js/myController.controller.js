(function (){
  angular
  .module('myApp')
  .controller('myController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', 'BookService', myController]);

    function myController($scope, myAppTitle, CharacterVersionFactory, BookService){
    $scope.myModel = "Hello";
    $scope.title = myAppTitle;
    $scope.characters = CharacterVersionFactory;
    $scope.books = BookService.getBooks();
    $scope.book = BookService.getBook();
    $scope.addBook = BookService.addBook;
  };
})();