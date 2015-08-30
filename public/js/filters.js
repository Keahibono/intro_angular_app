(function (){
  angular
  .module('myApp')
  .filter('beforeYearFilter', function (){
    return function (movies, year) {
      if(year === void 0){
        year = 2016;
      }
      return movies.filter(function (movie){
        return movie.year < year;
      });
    };
  });
})();