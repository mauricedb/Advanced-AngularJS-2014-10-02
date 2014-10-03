(function () {
    var mod = angular.module("myApp.Editor", []);

    mod.controller("MoviesEditorCtrl", function ($scope, $location, selectedMovie, directors, countries) {
        $scope.errorMessage = null;
        $scope.selectedMovie = selectedMovie;
        $scope.thisYear = new Date().getFullYear();

        $scope.directors = directors;
        $scope.countries = countries;

        $scope.save = function () {
            $scope.selectedMovie.$save().then(function () {
                $location.path("/movies");
            }, function (e) {
                $scope.errorMessage = e.data.error;
            });
        };

        $scope.cancel = function () {
            $location.path("/movies");
        };
    });

}());