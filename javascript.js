$(document).ready(function(){
  if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position) {
      var long;
      var lat;
      long = position.coords.longitude;
      lat = position.coords.latitude;
      
		//	$("#data").html("latitude: " + position.coords.latitude + "<br>longitude: "
				//+ position.coords.longitude); 
	

	var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=cc9394c5fbdcceb1b66165b4a04b0fff';

	$.getJSON(api, function(data){
    
    var fTemp;
    var cTemp;
    var kTemp;
    var tempSwap = true;
    
    var weatherType = data.weather[0].description;
    kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;
    var clouds = data.clouds.all;
    //additional var
    	var pressure = data.main.pressure;
    	var humidity = data.main.humidity;
    	//var rain = data.rain; tuk garmi
    	
    //end additional var

    fTemp = (kTemp*(9/5)-459.67).toFixed(1);
    cTemp = (kTemp - 273).toFixed(1);
    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#fTemp").html(fTemp + " &#8457");
    $("#fTemp").click(function(){
        if(tempSwap===false) {
          $("#fTemp").html(cTemp +" &#8451")
          tempSwap=true;
        } else {
          $("#fTemp").html(fTemp +" &#8457")
          tempSwap=false;
        }
    });
    
    $("#windSpeed").html(windSpeed+" m/s");
    $("#clouds").html(clouds+" % clouds");

   $("#pressure").html("Pressure: "+pressure.toFixed(1)+" hPa");
   $("#humidity").html("Humidity: "+humidity.toFixed(1)+" %");
   
    if(fTemp > 80) {
    		$('body').css('background-image','url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRHkTEtqUHsPjjv86FnPhlyPHVgdFzjMdZtpgh0HjdUbPcFRWl)')
    }
    else if (fTemp <= 80) {
    	$('body').css('background-image','url(http://img.wallpaperfolder.com/f/4ADF646E9D72/fall-weather-pictures-fine-autumn.jpg')
    }
  });
  });
}
  
  
});


