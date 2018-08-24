# RSS Reader

## Description

In this project I was given an unfinished web-based application that reads RSS feeds.  With [Jasmine](http://jasmine.github.io/) installed it was my responsibility to use test-driven development practices to write independent test suites to ensure this project was fully functional.

## How to View the Tests

Download or clone the project from this repository- then open the 'index.html' in your browser of choice to see the passing Jasmine Tests.

## Project Features

All tests were written in RSS-Reader/jasmine/spec/feedreader.js and verified by loading index.html in my browser.

I wrote tests for the following:

* All variables and feeds were defined
* looped through each feed to check that they contained a name and URL
* Tested functionality of the hamburger menu (hidden by default and could be toggled on/off)
* Callbacks were used to ensure that feeds are loaded before they are tested.

I also made sure that no test was dependent on the results of another, so future features could be added without breaking existing functionality.
