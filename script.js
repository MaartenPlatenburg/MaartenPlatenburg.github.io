var main = function(){
   callWApi(city, units);
   /*
   $.getJSON( "http://api.openweathermap.org/data/2.5/weather?q=Eindhoven&units=metric&APPID=95d38c513c13444b6290e62403391b4e", function( data ) {
      $('#weather').html(data.weather[0].main);
      $('#description').html(data.weather[0].description);
      $('#temp').html(data.main.temp);
      $('#city').html(data.name);
   });
   */
   $(".btn").click(function(){
      readInput();
   });
/*
   $('#weather_city').keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      console.log("enter pressed");
        readInput();
    };
});

      function() {
      console.log("button clicked " + i);
      i++;
      city = document.getElementById("weather_city");
      var units_metric = document.getElementById("units_metric");
      var units_imperial = document.getElementById("units_imperial");
      units;
      console.log("city " + city.value);
      console.log(units_metric.checked);
      if(units_metric.checked){
         units = "metric";
      } else {
         units = "imperial"
      }
      console.log(units);
      callWApi(city.value, units);

   });

   $("#weather_city").keydown(function(event){
      console.log("test enter");
       if(event.keyCode === 13){
          console.log("passed first part enter test");
           //readInput();
       }
   });

   document.getElementById("weather_city").addEventListener("keydown", function(e) {
    if (!e) { var e = window.event; }
    e.preventDefault(); // sometimes useful

    // Enter is pressed
    if (e.keyCode == 13) { readInput(); }
}, false);
*/

   console.log("test main end");
};
var i = 1;
var key = "a2bb80347ddf45905d4c30026a34a752";
var oWMurl = "http://api.openweathermap.org/data/2.5/weather?q=";
var fUrl = "https://api.flickr.com/services/rest/?";
var fKey = "825a6d105f983b5a899030875915a66a";
var fMethod = "flickr.photos.search";
var city = "Eindhoven";
var units = "metric";
 // London&appid=2de143494c0b295cca9337e1e96b00e0

var readInput = function(){
   city = document.getElementById("weather_city");
   var units_metric = document.getElementById("units_metric");
   var units_imperial = document.getElementById("units_imperial");
   console.log("city " + city.value);
   console.log(units_metric.checked);
   if(units_metric.checked){
      units = "metric";
   } else {
      units = "imperial"
   }
   console.log(units);
   callWApi(city.value, units);
};

var callWApi = function(city, units) {
   var apiUrl = oWMurl + city + "&units=" + units + "&appid=" + key;
   console.log(apiUrl);
   $.getJSON(apiUrl,
   function( data ) {
      rWeather = data.weather[0].main;
      rDescription = data.weather[0].description;
      rTemp = data.main.temp + "&deg;" + unit_sign();
      rCity = data.name;
      rCountry = data.sys.country;
      rLon = data.coord.lon;
      rLat = data.coord.lat;
      rWind = data.wind.speed;
      rWindDirection = data.wind.deg;
      rPressure = data.main.pressure;
      rHumidity = data.main.humidity;

      $('#weather').html(rWeather);
      $('#description').html("Detailed description:</br>" + rDescription);
      $('#temp').html("Temperature:</br>" + rTemp);
      $('#city').html(rCity + ", " + rCountry);
      $('#wind').html("Wind speed:</br>" + rWind);
      $('#humidity').html("Humidity:</br>" + rHumidity + "%");
      $('#pressure').html("Atmospheric pressure:</br>" + rPressure + " hPa");
      $('#winddir').html("Wind direction:</br>" + rWindDirection + " degrees");
      callFlApi();

/*
      $('#weather').html(data.weather[0].main);
      $('#description').html(data.weather[0].description);
      $('#temp').html(data.main.temp + "&deg;" + unit_sign());
      $('#city').html(data.name);
      */
   });
};

var callFlApi = function() {
   var apiFlUrl = fUrl + "&method=" + fMethod + "&tags=" + rCity + ",skyline" + "&extras=original_format,url_o" + "&sort=relevance" + "&per_page=1" + "&api_key=" + fKey + "&nojsoncallback=1" + "&format=json";
   console.log(apiFlUrl);

   $.getJSON(apiFlUrl,
   function( flickrData ) {
      var fPhoto = flickrData.photos.photo[0];
      console.log("test flickr api data");
      fId = flickrData.photos.photo[0].id;
      fOwner = flickrData.photos.photo[0].owner;
      fSecret = flickrData.photos.photo[0].secret;
      fFarmId = flickrData.photos.photo[0].farm;
      fServerId = flickrData.photos.photo[0].server;
      console.log("fId" + fId);
      console.log(fOwner);
      console.log("https://www.flickr.com/photos/" + fOwner + "/" + fId + "/");
      var fPhotoUrl = "https://farm" + fFarmId + ".staticflickr.com/" + fServerId + "/" + fId + "_" + fSecret + "_b" + ".jpg";
      console.log(fPhotoUrl);

      var getSizeUrl = fUrl + "&method=flickr.photos.getSizes" + "&api_key=" + fKey + "&photo_id=" + fId + "&nojsoncallback=1&format=json";
      console.log(getSizeUrl);
      $.getJSON(getSizeUrl,
      function( data ) {
         console.log(data.sizes.size.length);
         var fPhotoSizeUrl = data.sizes.size[data.sizes.size.length-1].source;
         console.log(fPhotoSizeUrl);
         $(".output").css({
            "background-image": "url(" + fPhotoSizeUrl + ")",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat"
         });
      });


      //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

   })
   .fail(function() {
      console.log("Flickr API error");
   });

};

var unit_sign = function() {
   if (units === "metric") {
      return "C"
   } else {
      return "F"
   };
};

$(document).ready(main);
