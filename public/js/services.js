(function(){
  angular
    .module('myApp')
    .service('BookService', function (){
      var books = [{title:"50 Shades", author: "Who Knows"},
                  {title:"DaVinci Code", author: "Dan Brown"},
                  {title: "Atlas Shrugged", author: "Weird Name"}];
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

        this.addBook = function (title, author){
          books.push({title: title, author: author});
          return books;
        };
    })
})();

