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



    app.directive("compiled", function () {
        return {

            compile: function (element, attrs) {
                element.html("<div> i = {{i}}</div>");
                element.bind("click", function () { alert(); });
                console.log("compile function", attrs);
            }

            //link:function(scope, element) {
            //    element.html("<div> i = " + scope.i +  "</div>");
            //    element.bind("click", function () { alert(); });
            //    console.log("link function");
            //}

        }
    })
}());