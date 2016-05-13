# jquery.phunkslider

A simple to customize and free to use jQuery Slider Plugin.

## Usage
	
	<!-- Markup -->
	<div id="slider">
		<ul>
			<li style="background-image: url(image-01.jpg)"><span class="title">Text for image-01</span></li>
			<li style="background-image: url(image-02.jpg)"><span class="title">Text for image-02</span></li>
			<li style="background-image: url(image-03.jpg)"><span class="title">Text for image-03</span></li>
		<ul>
	</div>

	<!-- Init slider -->
	<script>
	$( function() {
		$('#slider').phunkslider();
	});
	</script>

Please keep in mind, that you have to deliver suitable CSS for the slider. The active slide has the class `active`, while the inactive do not.
Example CSS:

	#slider {
		position: relative;
		background-color: #000;
	}

	#slider li::after {
		content: "";
		display: block;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 900;
		position: absolute;
	}

	#slider ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: block;
		width: 100%;
		height: 400px;
	}

	#slider li {
		display: block;
		position: absolute;
		opacity: 0;
		z-index: 100;
		height: 100%;
		width: 100%;
		background-size: cover;
		background-position: center;
		transition: opacity 1s;
	}

	#slider li.active {
		opacity: 1.0;
		z-index: 900;
	}

	#slider li .title {
		z-index: 999;
		display: block;
		width: 100%;
		padding: 40px;
		text-align: center;
		color: #fff;
		font-size: 24px;
		position: absolute;
		bottom: 0;
		text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
		display: none;
	}

	#slider li.active .title {
		display: block;
	}

## Options

Change the interval

	$('#slider').phunkslider.interval = 2000;

## Functions

Stop slider

	$('#slider').phunkslider.stop();

Start slider

	$('#slider').phunkslider.start();

Next slide (stops automatic loop)

	$('#slider').phunkslider.next();

Previous slide (stops automatic loop)

	$('#slider').phunkslider.prev();
