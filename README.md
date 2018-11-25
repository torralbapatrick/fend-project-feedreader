# Feed Reader Testing Project

This project is completed as part of [Udacity](https://www.udacity.com/) Front End Nanodegree Program. I was given a web-based application that reads RSS feeds. I needed to write tests using [Jasmine](https://jasmine.github.io/) based on the project [rubric](https://review.udacity.com/#!/rubrics/18/view). See `jasmine/spec/feedreader.js`.

## Table of Contents

* [Installation](#installation)
* [Instructions](#instructions)
* [Test Cases](#test-cases)
* [How To Break The Tests](#how-to-break-the-tests)
* [Dependencies](#dependencies)

## Installation

1. Download the GithHub zip file or clone the repository
    * [zip file](https://github.com/torralbapatrick/fend-project-feedreader/archive/master.zip)
    * [git clone](https://github.com/torralbapatrick/fend-project-feedreader)
2. Open index.html file
3. Or you can check the hosted site [here](https://torralbapatrick.github.io/fend-project-feedreader/)

## Instructions

Check the bottom of the page to see the Jasmine console where all the tests are listed. They all should pass.

## Test Cases

1. RSS Feeds
    * `allFeeds` is defined and is not empty
    * should contain a defined URL and is not empty
    * should contain a defined name and is not empty

2. The menu
    * is hidden by default
    * changes visibility when clicked

3. Initial Entries
    * should contain at least a single entry when `loadFeed` is called and done

4. New Feed Selection
    * content changes when new feed is loaded

## How To Break The Tests

1. RSS Feeds
    * Open `js/app.js` in your text editor
    * Remove or empty the `allFeeds` variable
    * Remove or empty `URL` or `name` properties

2. The menu
    * Open `jasmine/spec/feedreader.js` in your text editor
    * *Hidden by default:* Change `true` to `false` on line 59
    * *Changes visibility when clicked:* Change `true` to `false` on line 67

3. Initial Entries
    * Open `jasmine/spec/feedreader.js` in your text editor
    * Change `expect($('.feed .entry').length).toBeGreaterThan(0);` to `expect($('.feed .entry').length).not.toBeGreaterThan(0);` on line 86

4. New Feed Selection
    * Open `jasmine/spec/feedreader.js` in your text editor
    * Change `false` to `true` on line 113

## Dependencies

* [Jasmine](https://jasmine.github.io/)
* [jQuery](https://jquery.com/)