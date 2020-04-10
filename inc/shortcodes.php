<?php 

// Shortcode for adding solid buttons to site
function solidButton($atts, $content = null) {
	extract (shortcode_atts(array(
		'link' => 'null',
		'color' => 'null',
		'size' => 'null',
		'align' => 'null',
	), $atts));
	return "<div class='button-wrap' style='text-align: $align;'><a class='shortcode-button $size-button $color-button' href='$link'>".$content."</a></div>";
}

add_shortcode( 'solidButton', 'solidButton' );

function borderButton($atts, $content = null) {
	extract (shortcode_atts(array(
		'link' => 'null',
		'color' => 'null',
		'size' => 'null',
		'align' => 'null',
	), $atts));
	return "<div class='button-wrap' style='text-align: $align;'><a class='shortcode-button $size-button $color-button border-button' href='$link'>".$content."</a></div>";
}

add_shortcode( 'borderButton', 'borderButton' );

function bgButton($atts, $content = null) {
	extract (shortcode_atts(array(
		'link' => 'null',
		'color' => 'null',
		'size' => 'null',
		'align' => 'null',
	), $atts));
	return "<div class='button-wrap' style='text-align: $align;'><a class='shortcode-button $size-button $color-button border-button bg-button' href='$link'>".$content."</a></div>";
}

add_shortcode( 'bgButton', 'bgButton' );

// Shortcode for adding buttons that link externally
function solidButtonNewWin($atts, $content = null) {
	extract (shortcode_atts(array(
		'link' => 'null',
		'color' => 'null',
		'size' => 'null',
		'align' => 'null',
	), $atts));
	return "<div class='button-wrap' style='text-align: $align;'><a class='shortcode-button $size-button $color-button' href='$link' target='_blank'>".$content."</a></div>";
}

add_shortcode( 'solidButtonNewWin', 'solidButtonNewWin' );

function borderButtonNewWin($atts, $content = null) {
	extract (shortcode_atts(array(
		'link' => 'null',
		'color' => 'null',
		'size' => 'null',
		'align' => 'null',
	), $atts));
	return "<div class='button-wrap' style='text-align: $align;'><a class='shortcode-button $size-button $color-button border-button' href='$link' target='_blank'>".$content."</a></div>";
}

add_shortcode( 'borderButtonNewWin', 'borderButtonNewWin' );

function bgButtonNewWin($atts, $content = null) {
	extract (shortcode_atts(array(
		'link' => 'null',
		'color' => 'null',
		'size' => 'null',
		'align' => 'null',
	), $atts));
	return "<div class='button-wrap' style='text-align: $align;'><a class='shortcode-button $size-button $color-button border-button bg-button' href='$link' target='_blank'>".$content."</a></div>";
}

add_shortcode( 'bgButtonNewWin', 'bgButtonNewWin' );

?>
