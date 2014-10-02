(function () {

    var app = angular.module("asyncApp", []);

    app.config(function($provide) {

        $provide.decorator("$log", function($delegate) {
            return{
                info: function (msg) {
                    console.log("Wrapped", msg);
                    $delegate.info(msg);
                }
            };
        });
    });

    app.factory("worker", function ($q) {
        return {
            doWork: function () {
                var defer = $q.defer();

                setTimeout(function () {

                    defer.resolve('The result');
                    //defer.reject('The error');

                }, 2500);

                return defer.promise;
            },
            otherStuff: function () { }
        };
    });


    app.factory("otherWorker", function () {

    })

    app.controller("asyncCtrl", function ($scope, worker, $log) {


        $scope.start = function () {
            worker.doWork().then(function (e) {
                $scope.result = "Done " + e;
            }, function (e) {
                $scope.result = "Oops " + e;
            });
            $scope.result = "Started";
            $log.info("Starting");
        }
    });


}());
