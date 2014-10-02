(function () {

    var app = angular.module("demoApp", []);

    app.directive("setFocus", function () {
        return {
            link: function (scope, element) {
                element[0].focus();

                element.bind("click", function () { });
            }

        }

    });

    app.directive("newContent", function () {

        return {
            //template: "<div>This is the template</div>"
            templateUrl: "templates/content.html",
            link: function (scope) {
                scope.showMessage = function (msg) {
                    alert(msg)
                }
            },
            transclude: true,
            scope: true
        };
    });

}());