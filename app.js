var main = function(){
   $(".nav nav-tabs").click(function(){

   });
   $.getJSON( "http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=95d38c513c13444b6290e62403391b4e", function( data ) {
      $('#weather').html(data.weather[0].main);
      $('#description').html(data.weather[0].description);
      $('#temp').html(data.main.temp);
      $('#city').html(data.name);
   });
};

$(document).ready(main);
