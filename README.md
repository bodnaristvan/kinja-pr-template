# Kinja Pull Request Template Chrome Extension

Adds a default text to GitHubs new pull request page.


### Install

Using Google Chrome visit [chrome://extensions](chrome://extensions), or click Window \ Extensions in the menu.
Enable developer mode with the checkbox in the page header, click the "Load unpacked extension..." button, and open the downloaded kinja-pr-template folder.


### Usage

The extension works on GitHub pages that match the `https://github.com/gawkermedia/*/compare/*` URL pattern, it'll fill out the description textarea with the predefined text.


### Bookmarklet version

If for some reason you can't or don't want to use this extension, a simpler version can be added by pasting the following snippet into a bookmarklet:

```javascript
javascript:(function() {var e = document.getElementById('pull_request_body');if (e) {e.value += '### What does this PR do? How does it affect users?\n\n### How should this be tested (feature switches, URLs, special user permissions)?\n\n### Related Trello card, wiki page or blog posts\n';}})();
```
