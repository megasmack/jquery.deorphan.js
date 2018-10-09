jquery.deorphan.js
=============================

A jQuery plugin for eliminating typographical orphans on select text elements.

## What are orphans?

An orphan is a single word that appears by itself at the end of a paragraph.
This script finds the last two words of a selected element and joins them
together with a non-breaking space.

### For example:

![jquery.deorphan.js - example](https://www.jqueryscript.net/images/jQuery-Plugin-To-Eliminate-Paragraph-Orphans-deorphan-js.jpg)

For more information, check out this [Wikipedia entry](http://en.wikipedia.org/wiki/Widows_and_orphans).

## How to use it?

Include the plugin after loading jQuery.

Then to activate the plugin add the following code to your own js file.
```javascript
$('.your-class-name').deOrphan();
```

You can provide a list of elements you want deOrphan'd as well.
```javascript
$('.your-class-name, .another-class-name, p, section p').deOrphan();
```

If you put your JavaScript in the head of your document, make sure your DOM is ready.
```javascript
$().ready(function() {
    $('.your-class-name').deOrphan();
});
```
