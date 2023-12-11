import '../style/style.scss';
import { weatherResponse } from './services/axiosServices';

const weatherContainer = document.getElementById("weather");
if(weatherContainer){
   weatherContainer.appendChild
    
}


const weatherReport = document.getElementById("weatherReport");



const weatherForcast = await weatherResponse();


const locationName = document.createElement("h2");
locationName.innerHTML = weatherForcast.name;
weatherReport?.appendChild(locationName);