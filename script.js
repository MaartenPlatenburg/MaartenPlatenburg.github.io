var main = function(){
   $.getJSON( "http://api.openweathermap.org/data/2.5/weather?q=Eindhoven&units=metric&APPID=95d38c513c13444b6290e62403391b4e", function( data ) {
      $('#weather').html(data.weather[0].main);
      $('#description').html(data.weather[0].description);
      $('#temp').html(data.main.temp);
      $('#city').html(data.name);
   });
   $(".btn").click(function() {
      console.log("button clicked " + i);
      i++;
      var city = document.getElementById("weather_city");
      var units_metric = document.getElementById("units_metric");
      var units_imperial = document.getElementById("units_imperial");
      var units;
      console.log(units);
      console.log("city" + city.value);
      console.log(units_metric.checked);
      if(units_metric.checked){
         units = "metric";
      } else {
         units = "imperial"
      }
      console.log(units);

   });
   console.log("test end");
   console.log(key);
};

var i = 1;
var key = "a2bb80347ddf45905d4c30026a34a752";

$(document).ready(main);
