var main = function(){
   //callApi(city, units);
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

   $('#weather_city').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        readInput();
    }
});
/*
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
      callApi(city.value, units);

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


   console.log("test end");
   console.log(key);
};
var i = 1;
var key = "a2bb80347ddf45905d4c30026a34a752";
var oWMurl = "http://api.openweathermap.org/data/2.5/weather?q=";
var city = "Eindhoven";
var units = "metric";

 // London&appid=2de143494c0b295cca9337e1e96b00e0

var readInput = function(){
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
   callApi(city.value, units);
};

var callApi = function(city, units) {
   var apiUrl = oWMurl + city + "&units=" + units + "&appid=" + key;
   console.log(apiUrl);
   $.getJSON(apiUrl,
   function( data ) {
      rWeather = data.weather[0].main;
      rDescription = data.weather[0].description;
      rTemp = data.main.temp + "&deg;" + unit_sign();
      rCity = data.name;
      rCountry = data.sys.country;

      $('#weather').html(rWeather);
      $('#description').html(rDescription);
      $('#temp').html(rTemp);
      $('#city').html(rCity + ", " + rCountry);

/*
      $('#weather').html(data.weather[0].main);
      $('#description').html(data.weather[0].description);
      $('#temp').html(data.main.temp + "&deg;" + unit_sign());
      $('#city').html(data.name);
      */
   });
};

var unit_sign = function() {
   if (units === "metric") {
      return "C"
   } else {
      return "F"
   }
};

$(document).ready(main);
