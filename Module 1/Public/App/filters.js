(function () {

    var app = angular.module("filterApp", []);


    app.controller("filterCtrl", function ($scope, $filter) {
        $scope.now = new Date();

        $scope.searchText = "";
        $scope.movies = window.movies;
        $scope.filteredMovies = $scope.movies;

        var filterFn = $filter("filter");
        $scope.search = function () {

            $scope.filteredMovies = filterFn($scope.movies, { 'title': $scope.searchText });
        }

    });


}());
