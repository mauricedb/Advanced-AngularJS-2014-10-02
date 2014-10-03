describe("The movie list controller", function () {
    var ctrl, scope;

    beforeEach(module("myApp.List"));

    beforeEach(inject(function ($controller) {
        scope = {};
        ctrl = $controller("MoviesListCtrl",
        {
            $scope: scope,
            movies: [{}]
        });


    }));

    it("can be created", function () {
        expect(ctrl).toBeDefined();
    });

    it ("has data on the scope", function() {

        expect(scope.movies.length).toBe(1);
    })
});