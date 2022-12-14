var miMapa = new Object();

function initMap(){  
	var centro = {lat: 43.5672702, lng: -5.8502461};
	var mapaGeoposicionado = new google.maps.Map(document.querySelector("section"),{
		zoom: 7,
		center:centro,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
    
	infoWindow = new google.maps.InfoWindow;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
		var pos = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};

		infoWindow.setPosition(pos);
		infoWindow.setContent('Localización encontrada');
		infoWindow.open(mapaGeoposicionado);
		mapaGeoposicionado.setCenter(pos);
		}, function() {
			handleLocationError(true, infoWindow, mapaGeoposicionado.getCenter());
		});
	} else {
		handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
	}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		'Error: Ha fallado la geolocalización' :
		'Error: Su navegador no soporta geolocalización');
	infoWindow.open(mapaGeoposicionado);
}
miMapa.initMap = initMap;