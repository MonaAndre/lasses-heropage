import "../style/style.scss";
import { IDog } from "./models/IDog";
import { generateDogs } from "./services/axiosServices";
import { getQuotes, getRandomIndex, drawQuote } from "./services/axiosServices";

const title = document.createElement("h2") as HTMLHeadingElement;
title.className = "quote__text";
const quoteContainer = document.getElementById("quote");
quoteContainer?.appendChild(title);

const author = document.createElement("h4") as HTMLHeadingElement;
author.className = "quote__author";
quoteContainer?.appendChild(author);

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
import { weatherResponse } from "./services/axiosServices";

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

weatherIcon.src =
  "http://openweathermap.org/img/w/" + weatherForcast.weather[0].icon + ".png";
weatherDescription.innerHTML = weatherForcast.weather[0].description;
wind.innerHTML = "Vind: " + weatherForcast.wind.speed + " m/s";

weatherDiv.appendChild(weatherIcon);
weatherDiv.appendChild(weatherDescription);

//main
const pTagTemp = document.createElement("p");
const pTagHumidity = document.createElement("p");

pTagTemp.innerHTML =
  "Temperaturen idag: " +
  String(weatherForcast.main.temp) +
  "°" +
  " känns som: " +
  String(weatherForcast.main.feels_like) +
  "°";
pTagHumidity.innerHTML =
  "Luftfuktighet: " + String(weatherForcast.main.humidity);

weatherDiv.appendChild(pTagTemp);
weatherDiv.appendChild(pTagHumidity);
weatherDiv.appendChild(wind);
weatherToday?.appendChild(weatherDiv);

const quoteBtn = document.getElementById("getbtn") as HTMLButtonElement;
quoteBtn?.addEventListener("click", async () => {
  const quotes = await getQuotes();
  drawQuote(quotes[getRandomIndex()]);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".hamburger");
hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu?.classList.toggle("active");
});

document.querySelectorAll(".navLink").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger?.classList.remove("active");
    navMenu?.classList.remove("active");
  })
);


// animation on scroll 
const sections = document.querySelectorAll('.section');

const observerOptions = {
  root: null,
  threshold: 0.5,
};

const sectionObserver = new IntersectionObserver((entries, ) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});
