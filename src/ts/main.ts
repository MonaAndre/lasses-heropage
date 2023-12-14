import "../style/style.scss";
import { IDog } from "./models/IDog";
import { generateDogs } from "./services/axiosServices";
import { getQuote } from "./services/axiosServices";

const generateButton = document.getElementById("generateButton");

generateButton?.addEventListener("click", async () => {
  const dogs = await generateDogs();

  createHtmlForDogGenerator(dogs);

  console.log(dogs);
});

const createHtmlForDogGenerator = (dogs: IDog[]) => {
  const dogGeneratorContainer = document.getElementById(
    "dogGeneratorContainer"
  );
  if (dogGeneratorContainer) {
    dogGeneratorContainer.innerHTML = "";
  }

  dogs.forEach((dog) => {
    const imageContainer = document.createElement("img");
    imageContainer.className = "dogImage";
    imageContainer.setAttribute("src", dog.url);
    dogGeneratorContainer?.appendChild(imageContainer);
  });
};
import { weatherResponse } from './services/axiosServices';

//från HTML
const weatherToday = document.getElementById("weatherToday");
//<IWeatherRespons>
const weatherForcast = await weatherResponse();
//weatherContainer
const weatherDiv = document.createElement("div");
weatherDiv.className = "tempDiv";
//Stockholm
const icon = document.getElementById("icon");
const cityName = document.createElement("h3")
const weatherIcon = document.createElement("img");
cityName.innerHTML = "Vädret i " + weatherForcast.name + " idag:";
weatherIcon.src= "http://openweathermap.org/img/w/" + weatherForcast.weather[0].icon +".png";
weatherIcon.className = "iconClass"
icon?.appendChild(cityName)
icon?.appendChild(weatherIcon);
//IWeather

const weatherDescription = document.createElement("p");
const wind = document.createElement("p");


weatherDescription.innerHTML = weatherForcast.weather[0].description
wind.innerHTML = "Vind: " +weatherForcast.wind.speed +" m/s";


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

const quoteBtn = document.getElementById("getbtn") as HTMLButtonElement;
quoteBtn?.addEventListener("click", async () => {
  await getQuote();
});
