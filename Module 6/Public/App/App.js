(function () {

    var app = angular.module("demoApp", ["ngSanitize"]);

    app.controller("demoCtrl", function ($scope, $sce) {
        $scope.snippet = "<span class='red' onclick='alert()'>Hello</span>";
        $scope.safeSnippet = $sce.trustAsHtml($scope.snippet);
    });

}());