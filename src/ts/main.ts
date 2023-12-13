import '../style/style.scss';
import { weatherResponse } from './services/axiosServices';

//från HTML
const weatherToday = document.getElementById("weatherToday");
//<IWeatherRespons>
const weatherForcast = await weatherResponse();
//weatherContainer
const weatherDiv = document.createElement("div");
weatherDiv.className = "tempDiv";
//Stockholm
const cityName = document.getElementById("cityName") as HTMLParagraphElement;
cityName.innerHTML = "Vädret i " + weatherForcast.name + " idag:";

//IWeather
const weatherIcon = document.createElement("img");
const weatherDescription = document.createElement("p");
const wind = document.createElement("p");

weatherIcon.src= "http://openweathermap.org/img/w/" + weatherForcast.weather[0].icon +".png";
weatherDescription.innerHTML = weatherForcast.weather[0].description
wind.innerHTML = "Vind: " +weatherForcast.wind.speed +" m/s";

weatherDiv.appendChild(weatherIcon);
weatherDiv.appendChild(weatherDescription);

//main
const pTagTemp = document.createElement("p");
const pTagHumidity = document.createElement("p");

pTagTemp.innerHTML= "Temperaturen idag: "+String(weatherForcast.main.temp)+"°" +" känns som: "+ String(weatherForcast.main.feels_like)+ "°";
pTagHumidity.innerHTML= "Luftfuktighet: "+String(weatherForcast.main.humidity);

weatherDiv.appendChild(pTagTemp);
weatherDiv.appendChild(pTagHumidity);
weatherDiv.appendChild(wind);
weatherToday?.appendChild(weatherDiv);

