(function () {
    var app = angular.module("myApp", [
        "ngResource",
        "ngRoute",
        "myApp.List",
        "myApp.Editor",
        "myApp.Resources",
        "myApp.Externals"
    ]);

    app.run(function ($templateCache) {
        //$templateCache.put("/templates/movieEditor.html", "Demo");

    });

    app.run(function ($templateCache) {
        $templateCache.put("/templates/t.html", "Demo");

    });

    app.config(function ($routeProvider) {

        $routeProvider.when("/movies", {
            controller: "MoviesListCtrl",
            templateUrl: "/templates/movieList.html",
            resolve: {
                movies: function (Movie) {
                    return Movie.query();
                }
            }
        });
        $routeProvider.when("/movies/:id", {
            controller: "MoviesEditorCtrl",
            templateUrl: "/templates/movieEditor.html",
            resolve: {
                selectedMovie: function (Movie, $route) {
                    return Movie.get({ id: $route.current.params.id });
                },
                directors: function (Director) {
                    return Director.query();
                },
                countries: function (Country) {
                    return Country.query();
                }
            }
        });
        $routeProvider.otherwise({
            redirectTo: "/movies"
        });
    });





    app.controller("HeaderCtrl", [
        "$scope", function ($s) {
            $s.setting = {
                startTime: new Date().toLocaleTimeString()
            };
        }
    ]);




}());