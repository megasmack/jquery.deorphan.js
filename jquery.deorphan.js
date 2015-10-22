/*
 *  deOrphan 1.1.5 - jQuery Plugin
 *  https://github.com/megasmack/jquery.deorphan.js
 *  written by Steve Schrab - @megasmack
 *  Special thanks to Erik Wessel - @wesselej and Jeffrey Schrab - @jschrab
 *
 *  Copyright (c) 2015 Steve Schrab (http://www.gsdesign.com/)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 *
 *  What are Orphans?
 *
 *  An orphan is a single word that appears by itself at the end of a paragraph.
 *  This script finds the last two words of a selected element and joins
 *  them together with a non-breaking space.
 *
 *  http://en.wikipedia.org/wiki/Widows_and_orphans
 */
(function($){
    $.fn.deOrphan = function() {

        function _deOrphan(node) {
            $(node).contents().each(function (i,node) {
                if (node.nodeType === 3 && (typeof(node.textContent) !== 'undefined')) { // nodeType 3 is TEXT_NODE
                    node.textContent = node.nodeValue.replace(/ (\S*)$/, '\u00A0$1');
                } else {
                    _deOrphan(node);
                }
            });
        }

        return this.each(function(i,el) {
            _deOrphan(el);
        });
    };
})(jQuery);
