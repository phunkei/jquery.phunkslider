/*! phunkslider for jQuery
 *
 * http://www.phunkei.de
 * https://github.com/phunkei/jquery.phunkslider
 * License: MIT License (MIT)
 */
(function( $ ){
	$.fn.phunkslider = function(options) {

		if(options !== undefined) {
			if(options.fadetime !== undefined) {
				$.fn.phunkslider.options.fadetime = options.fadetime;
			}
			if(options.interval !== undefined) {
				$.fn.phunkslider.options.interval = options.interval;
			}
		}
		
		var $slides = $(this).find('li');
		$slides.removeClass('active');
		$slides.first().addClass('active');

		$.fn.phunkslider.options.slides = $slides;

		setTimeout( function() {
			$.fn.phunkslider.start()
		}, $.fn.phunkslider.options.interval);
	}

	$.fn.phunkslider.options = {
		"fadetime" : 1000,
		"interval" : 6000,
		"start" : false,
		"slides" : null
	}

	$.fn.phunkslider.loop = function() {
		if(!$.fn.phunkslider.options.start) return;

		var el = $.fn.phunkslider.options.slides;
		var $active = $(el).filter('.active');
		var $next = ($active.next().length > 0) ? $active.next() : $(el[0]);

		$next.addClass('active');
		$active.removeClass('active');
		setTimeout( function() {
				$.fn.phunkslider.loop();
			}, $.fn.phunkslider.options.interval);
	}

	$.fn.phunkslider.start = function() {
		if(!$.fn.phunkslider.options.start) {
			$.fn.phunkslider.options.start = true;
			$.fn.phunkslider.loop( $.fn.phunkslider.options.slides );
		}
	}

	$.fn.phunkslider.stop = function() {
		$.fn.phunkslider.options.start = false;
	}

	$.fn.phunkslider.prev = function() {
		$.fn.phunkslider.stop();
		var el = $.fn.phunkslider.options.slides;

		var $active = $(el).filter('.active');
		var $next = ($active.prev().length > 0) ? $active.prev() : $(el[ el.length - 1 ]);

		$next.addClass('active');
		$active.removeClass('active');
	}

	$.fn.phunkslider.next = function() {
		$.fn.phunkslider.stop();
		var el = $.fn.phunkslider.options.slides;

		var $active = $(el).filter('.active');
		var $next = ($active.next().length > 0) ? $active.next() : $(el[0]);

		$next.addClass('active');
		$active.removeClass('active');
	}

})( jQuery );