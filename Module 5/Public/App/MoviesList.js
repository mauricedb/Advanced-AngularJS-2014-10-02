(function() {
    var mod = angular.module("myApp.List", ["myApp.Externals"]);

    mod.filter("directorName", function(Director, _) {
        var directors = Director.query();

        return function(id) {
            var director = _.find(directors, function(d) {
                return d.id === id;
            }) || {};

            return director.name || "(Unkown)";
        };
    });

    function MoviesListCtrl(s, l, movies) {
        s.movies = movies;

        s.select = function(movie) {
            l.path("/movies/" + movie.id);
        };
    }

    MoviesListCtrl.$inject = ["$scope", "$location", "movies"];
    mod.controller("MoviesListCtrl", MoviesListCtrl);
}());
