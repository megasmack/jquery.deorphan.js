/*
 *	deOrphan 1.0 - jQuery Plugin
 *	written by Steve Schrab - @megasmack
 *	Special thanks to Erik Wessel - @wesselej and Jeffrey Schrab - @jschrab
 *
 *	Copyright (c) 2012 Steve Schrab (http://www.gsdesign.com/)
 *	Licensed under the MIT license:
 *	http://www.opensource.org/licenses/mit-license.php
 *
 *	What are Orphans?
 *
 *	An orphan is a single word that appears by itself at the end of a paragraph.
 *	This script finds the last two words of a selected element and joins
 *	them together with a non-breaking space.
 *
 *	http://en.wikipedia.org/wiki/Widows_and_orphans
 */

 /*
	To activate the plugin add the following code to your own js file.

		$('.your-class-name').deOrphan();

	You can provide a list of elements you want deOrphan'd as well.

		$('.your-class-name, .another-class-name, p, section p').deOrphan();

	If you put your JavaScript in the head of your document, make sure your DOM is ready.

		$().ready(function() {
			$('.your-class-name').deOrphan();
		});
 */
(function($){
	$.fn.deOrphan = function() {

		function _deOrphan(node) {
			$(node).contents().each(function () {
				if (this.nodeType == 3) { // nodeType 3 is TEXT_NODE
					this.textContent = this.textContent.replace(/ (\S*)$/, '\u00A0$1');
				} else {
					_deOrphan(this);
				}
			});
		}

		return this.each(function(i,el) {
			_deOrphan(el);
		});
	};
})(jQuery);