(function() {

    var app = angular.module("mainApp", []);


    app.controller("demo1Ctrl", function ($scope) {
        $scope.send = function () {
            //$scope.$broadcast("Some event");
            //$scope.$emit("Some event");
            $scope.$root.$broadcast("Some event");
        }
    });


    app.controller("demo2Ctrl", function ($scope) {
        $scope.$on("Some event", function() {
            $scope.message = "The event fired";
        });
    });
}());
