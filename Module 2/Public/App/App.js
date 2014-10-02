(function () {
    var app = angular.module("moviesApp", ["moviesApp.data.directors"]);

    app.controller("editMovieCtrl", function ($scope, directors) {


        $scope.movie = {
            "id": 2,
            "title": "About Schmidt",
            "description": "When insurance actuary Warren Schmidt (Jack Nicholson) retires and his wife dies, he looks for life's meaning on a road trip to his daughter's (Hope Davis) upcoming wedding to a waterbed salesman (Dermot Mulroney). But Schmidt can't seem to get anything right. En route to the wedding, he shares his life through letters with a Tanzanian boy he's sponsoring for 73 cents a day -- and soon, Schmidt discovers renewed purpose.",
            "year": 2002,
            "rating": "R",
            "directorID": 1,
            "countryID": 2,
            "posterName": "AboutSchmidt.jpg"
        };

        $scope.directors = directors;

        $scope.save = function () {
            console.log($scope.frm);
            alert("Saving " + $scope.movie.title);
        }
    });
}())