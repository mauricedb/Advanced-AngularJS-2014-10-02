(function () {
    var mod = angular.module("myApp.Resources", ["ngResource"]);

    mod.factory("Movie", [
        '$resource',
        function ($resource) {
            return $resource("/api/movies/:id", { id: '@id' }, {
                save: {
                    method: "PUT"
                }
            });
        }
    ]);

    mod.factory("Country", function ($resource) {
        return $resource("/api/countries");
    });

    mod.factory("Director", function ($resource) {
        return $resource("/api/directors", {}, {
            query: {
                method: "GET",
                isArray: true,
                cache: true
            }
        });
    });
}());
