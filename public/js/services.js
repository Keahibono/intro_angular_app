(function(){
  angular
    .module('myApp')
    .service('BookService', function (){
      var books = ["50 Shades", "DaVinci Code", "Atlas Shrugged"];
        this.getBooks = function (){
          return books;
        };

        this.getBook = function (index){
          if(index < 0 || index >= books.length){
            return null;
          } else {
            return books[index];
          }
        };
    })
})();

