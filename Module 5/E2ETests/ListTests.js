describe('angularjs homepage', function () {
    beforeEach(function() {
        browser.get('http://localhost:8080/');
    });


    it('should have a title', function () {

        expect(browser.getTitle()).toEqual('Movies');
    });

    it("can navigate to the edit page", function() {
        element(by.repeater("movie in movies")
            .row(5).
            column("title")).click();

        element(by.binding("selectedMovie.title"))
            .clear()
            .sendKeys("Some other title");

        element(by.id("btnSave")).click();
    });
});