var mapaDinamicoGoogle = new Object();
function initMap(){
    var oviedo = {lat: 43.3672702, lng: -5.8502461};
    var mapaOviedo = new google.maps.Map(document.querySelector("section"),{zoom: 8,center:oviedo});
    var marcador = new google.maps.Marker({position:oviedo,map:mapaOviedo});
}
mapaDinamicoGoogle.initMap = initMap;