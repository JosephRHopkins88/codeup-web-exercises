//
//
// let urlParams = new URLSearchParams(window.location.search);
// let searchText = urlParams.get('txtSearch');
//
// //if my search text is empty or my search text has nothing written after it then this defaults to location of San Antonio
// if(searchText===null || searchText.length===0)
// {
//     searchText="San Antonio, Texas";
// }
//
// //document.getElementById("txtSearch").value = searchText;
//
// document.getElementById("currentCity").innerHTML = searchText;
//
// mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
//
// //this is controlling my entire search. it is grabbing a response and if that response if filled it is sending back the information needed.
// var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
// mapboxClient.geocoding
//     .forwardGeocode({
//         query: searchText,
//         autocomplete: false,
//         limit: 1
//     })
//     .send()
//     .then(function (response) {
//         if (
//             response &&
//             response.body &&
//             response.body.features &&
//             response.body.features.length
//         ) {
//             var feature = response.body.features[0];
//             console.log(feature);
//             //this is what is giving me my map
//             var map = new mapboxgl.Map({
//                 container: 'map', // container ID
//                 style: 'mapbox://styles/mapbox/streets-v11', // style URL
//                 center: feature.center,//[-98.493629, 29.424122], // starting position [lng, lat]
//                 zoom: 9, // starting zoom
//
//             });
//
//             //this is giving me my marker and it is being told where to set. in this case center
//             const marker = new mapboxgl.Marker({color: 'red'}).setLngLat([feature.center[0],feature.center[1]]).addTo(map);
//             const popup = new mapboxgl.Popup().setLngLat([feature.center[0],feature.center[1]]).addTo(map);
//             marker.setPopup(popup);
//             //get the weather from the starting location
//             getWeatherInfo(marker,popup);
//             marker.setDraggable(true);
//             marker.on('dragend', function () {
//                 //get the name of the city we dragged onto
//                 getCityName(marker,popup);
//                 //get the weather from wherever we dragged the marker to
//                 getWeatherInfo(marker,popup);
//             })
//
//         }})
//
//
// function getCityName(marker,popup)
// {
//     //alert("getting city name");
//     var lngLat = marker.getLngLat();
//     var coordinates = [lngLat.lat, lngLat.lng];
//     //this is getting the coordinates and turning it into a location
//     mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
//     var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
//     mapboxClient.geocoding
//         .reverseGeocode({
//             query: [coordinates[1],coordinates[0]]
//         })
//         .send()
//         .then(function (response) {
//             //console.log("hello 1: " + response.body.features);
//             if (
//                 response &&
//                 response.body &&
//                 response.body.features &&
//                 response.body.features.length
//             ) {
//                 var feature = response.body.features[0];
//                 //console.log("hello: " + parseReverseGeo(feature));
//
//                 document.getElementById("currentCity").innerHTML = parseReverseGeo(feature);
//             }
//         })
// }
//
// //this is going through the context and fining certain aspects to display back.
// function parseReverseGeo(geoData) {
//     // debugger;
//     var region, countryName, place, returnStr;
//     if(geoData.context){
//         $.each(geoData.context, function(i, v){
//             //console.log(v.id + " - " + v.text);
//             if(v.id.indexOf('place') >= 0) {
//                 place = v.text;
//             }
//             else if(v.id.indexOf('region') >= 0) {
//                 region = v.text;
//             }
//             else if(v.id.indexOf('country') >= 0) {
//                 countryName = v.text;
//             }
//         });
//     }
//     if(place && region && countryName) {
//         returnStr = place + ", " + region + ", " + countryName;
//     } else {
//         returnStr = geoData.place_name;
//     }
//     return returnStr;
// }
//
// function getWeatherInfo(marker,popup)
// {
//     //this is taking the coordiantes and finding the weather for the location. Then it is getting each element that is called so that i can display them into a div. it is also converting the time and date into readable text not just numbers. this is also where the icons are being called.
//     var lngLat = marker.getLngLat();
//     var coordinates = [lngLat.lat, lngLat.lng];
//     popup.setHTML('Coordinates: ' + lngLat.lat.toFixed(2) + ',' + lngLat.lng.toFixed(2));
//     $.get("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&exclude=current,hourly,minutely&appid=" + WEATHER_MAP_TOKEN)
//         .done(function (resp) {
//             console.log(resp);
//             //var today = resp.daily[0];
//             //var todayDate = new Date(today.dt * 1000);
//             //console.log(todayDate);
//             for (var i = 0; i < 5; i++) {
//                 document.getElementById("todayDate" + i).innerHTML = new Date(resp.daily[i].dt*1000).toDateString();
//                 document.getElementById("icon" + i).innerHTML = "<img src='http://openweathermap.org/img/wn/" + resp.daily[i].weather[0].icon + "@2x.png' alt='The weather icon'/>";
//                 document.getElementById("temp" + i).innerHTML = "Temperature:<br/>Morning:" + resp.daily[i].temp.morn.toFixed(0) + "&#8457;" + "<br/>Day:" + resp.daily[i].temp.day.toFixed(0) + "&#8457;" + "<br/>Evening:" + resp.daily[i].temp.eve.toFixed(0) + "&#8457;" + "<br/>Night:" + resp.daily[i].temp.night.toFixed(0) + "&#8457;" + "<br/>Min:" + resp.daily[i].temp.min.toFixed(0) + "&#8457;" + "<br/>Max:" + resp.daily[i].temp.max.toFixed(0) + "&#8457;";
//                 document.getElementById("wind_speed" + i).innerHTML = "Wind speed: " + resp.daily[i].wind_speed;
//                 document.getElementById("sunrise" + i).innerHTML = "Sunrise: " + new Date(resp.daily[i].sunrise*1000).toLocaleTimeString();
//                 document.getElementById("sunset" + i).innerHTML = "Sunset: " + new Date(resp.daily[i].sunset*1000).toLocaleTimeString();
//             }
//             if (resp.daily.length > 0) {
//                 document.getElementById("weather_row").style.display = "flex";
//             }
//         });
// }