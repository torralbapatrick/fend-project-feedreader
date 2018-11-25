/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    // RSS Feeds test suite
    describe('RSS Feeds', () => {
        /* A tests that ensures the allFeeds variable
         * has been defined and that it is not empty.
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed in the
         * allFeeds object and ensures it has a URL
         * defined and that the URL is not empty.
         */
        it('should contain a defined URL and is not empty', () => {
            for (feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* A test that loops through each feed in the
         * allFeeds object and ensures it has a name
         * defined and that the name is not empty.
         */
        it('should contain a defined name and is not empty', () => {
            for (feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    // The menu test suite
    describe('The menu', () => {
        let body,
            menuIcon;

        beforeEach(() => {
            body = $('body');
            menuIcon = $('.menu-icon-link');
        });

        /* A test that ensures the menu 
         * element is hidden by default.
         */
        it('is hidden by default', () => {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /* A test that ensures the menu changes visibility
         * when the menu icon is clicked.
         */
        it('changes visibility when clicked', () => {
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    // Initial Entries test suite
    describe('Initial Entries', () => {
        // Checks if the loadFeed is done
        beforeEach(done => {
            loadFeed(0, done);
        });

        /* A test that ensures when the loadFeed function is
         * called and completes its work, there is at least a
         * single .entry lement within the .feed container.
         */
        it('should contain at least a single entry when loadFeed is called and done', () => {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    // New Feed Selection test suite
    describe('New Feed Selection', () => {
        let firstFeed,
            secondFeed;

        beforeEach(done => {
            loadFeed(0, () => {
                firstFeed = $('.feed').html();

                loadFeed(1, () => {
                    secondFeed = $('.feed').html();
                    done();
                });
            });
        });

        /* A test that ensures when a new feed is loaded by the
         * loadFeed function that the content actually changes.
         */
        it('content changes when new feed is loaded', () => {
            expect(firstFeed).not.toEqual(secondFeed);
        });
    });
}());
