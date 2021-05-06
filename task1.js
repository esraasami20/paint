window.addEventListener('load', function () {

    divtwo = document.getElementById('divtwo');
});//end of load

function getuserlocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(getposition, errorhandeler);

    } else {
        divtwo.innerHTML = '<h1>Sorry , Update  your Broser And Try Again !</h1>';
        // not avialable
    }
}
function getposition(position) {

    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    latlon = lat + ' , ' + lon;
    divtwo.innerText = latlon;


    // steps  to deal with google api
    //1- create object from google lat lon (lat,lon) => current location
    var mymlocation = new google.maps.LatLng(lat, lon);
    //2- create map specs (center:,zoom:)
    var mysepcs = { center: mymlocation, zoom: 17 };
    //3- generate map as image allocate map inside div 
    var myimg = new Image();
    myimg.src = new google.maps.Map(mymap, mysepcs);



}
function errorhandeler(error) {
    
    switch (error.code) {
        case error.PERMISSION_DENIED:
            divtwo.innerText = 'PERMISSION_DENIED ITI';
            break;
        case error.POSITION_UNAVAIBALE:
            divtwo.innerText = 'POSITION_UNAVAIBALE';
            break;
        case error.TIMEOUT:
            divtwo.innerText = 'TIMEOUT';
            break;
        case error.UNKOWN_ERROR:
            divtwo.innerText = 'UNKOWN_ERROR';
            break;
    }
}