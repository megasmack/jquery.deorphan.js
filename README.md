jquery.deorphan.js
=============================

A jQuery plugin for eliminating typographical orphans on select text elements.

What are orphans?
-----------------

An orphan is a single word that appears by itself at the end of a paragraph.
This script finds the last two words of a selected element and joins them
together with a non-breaking space.

For example:

![jquery.deorphan.js - before and after example](http://www.gsdesign.com/sites/default/files/default/files/gs/images/blog/before-after.png)

For more information, check out this [Wikipedia entry](http://en.wikipedia.org/wiki/Widows_and_orphans).

How to use it?
--------------

Include the plugin after loading jQuery. Then to activate the plugin add the following code to your own js file.

	$('.your-class-name').deOrphan();

You can provide a list of elements you want deOrphan'd as well.

	$('.your-class-name, .another-class-name, p, section p').deOrphan();

If you put your JavaScript in the head of your document, make sure your DOM is ready.

	$().ready(function() {
		$('.your-class-name').deOrphan();
	});

Author
======

Steve Schrab
------------
[@megasmack](http://twitter.com/megasmack)

Special thanks to:
[@wesselej](http://twitter.com/wesselej) and [@jschrab](http://twitter.com/jschrab)

License
=======

MIT or GPL