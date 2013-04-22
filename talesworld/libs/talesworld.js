$(document).ready(function () {
	"use strict";
//
//	function handleResize() {
//		var mapContainer = document.getElementById('map');
//		$(mapContainer).css('width', $(window).innerWidth() + 'px').css('height', $(window).innerHeight() + 'px');
//		map.invalidateSize();
//		console.log('size updated: ' + $(window).innerWidth() + 'x' + $(window).height());
//	}
//
//	$(window).resize(function () {
////		setTimeout(handleResize, 100);
//	});

	// setup map
	var map = L.map('map').setView([0, 0], 2);
	L.tileLayer('data/{z}/{x}/{y}.png', {
		minZoom: 1,
		maxZoom: 6,
		attribution: '<a href="http://sourceoftales.org">Source of Tales</a>  World Map',
		tms: true,
		continuousWorld: true,
		noWrap: true
	}).addTo(map);

	// fit the caserns on the screen
	var bounds;
	bounds = new L.LatLngBounds(
		new L.LatLng(-46.67959, -153.10547),
		new L.LatLng(-65.10915, -106.69922)
	);
	map.fitBounds(bounds);


//	$(window).resize();

//
//	function onMapClick(e) {
//		console.log(e.latlng, e.latlng.toString());
//	}
//
//	map.on('click', onMapClick);
});
