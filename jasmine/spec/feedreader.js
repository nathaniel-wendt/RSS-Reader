/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* All test suites are placed within the $() function,
 * since some of these tests may require DOM elements.
 * This ensures they don't run until the DOM is ready.
 */
const body = document.querySelector('body');
const menu = document.querySelector('.menu-icon-link');

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

        // This test ensures the menu element is hidden by default
        // and the menu can be toggled between hidden/shown on click.
        it('can be toggled on/off', function() {
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

    });


    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
