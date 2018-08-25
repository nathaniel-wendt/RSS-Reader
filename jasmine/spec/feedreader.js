const body = document.querySelector('body');
const menu = document.querySelector('.menu-icon-link');
const feed = document.querySelector('.feed');

/* All test suites are placed within the $() function,
 * since some of these tests may require DOM elements.
 * This ensures they don't run until the DOM is ready.
 */

$(function() {

    describe('RSS Feeds', function() {
        // This tests ensures the allFeeds variable has been defined
        // and that the allFeeds variable is not empty.
        it('has defined feeds', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // This test loops through each feed in the allFeeds object and
        // ensures it has a URL defined and that the URL is not empty.
        it('has defined urls', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            };
        });

        // This test loops through each feed in the allFeeds object and
        // ensures it has a name defined and that the name is not empty.
        it('has defined names', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            };
        });
    });


    describe('The Menu', function() {
        // This test ensures the menu element is hidden by default.
        it('is hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        // This test ensures the menu can be toggled between hidden/shown on click.
        it('can be toggled on/off', function() {
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });


    describe('Initial Entries', function() {
        // This let's Jasmine know that our beforeEach function
        // has finished and it can proceed with our test.
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        // This test ensures when the loadFeed function is called and completes,
        // there is at least one .entry element within the .feed container.
        it('has at least one entry', function() {
            let entries = $('.feed .entry');
            expect(entries.length).toBeGreaterThan(0);
        });
    });


    describe('New Feed Selection', function() {
        // This loads then reloads the feed, storing the feeds to test for differences
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = feed.innerHTML;

                loadFeed(1, function() {
                secondFeed = feed.innerHTML;
                    done();
                });
            });
        });

        // This test ensures the feed changes on every load.
        it('changes feed content', function() {
            expect(firstFeed).not.toEqual(secondFeed);
        });
    });
}());
