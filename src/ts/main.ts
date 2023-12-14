import "../style/style.scss";
import { IDog } from "./models/IDog";
import { IMoviesLassi } from "./models/IMoviesLassie";
import { generateDogs } from "./services/axiosServices";
import { getQuotes, getRandomIndex, drawQuote } from "./services/axiosServices";
import axios from "axios";

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
const icon = document.getElementById("icon");
const cityName = document.createElement("h3");
const weatherIcon = document.createElement("img");
cityName.innerHTML = "Vädret i " + weatherForcast.name + " idag:";
weatherIcon.src =
  "http://openweathermap.org/img/w/" + weatherForcast.weather[0].icon + ".png";
weatherIcon.className = "iconClass";
icon?.appendChild(cityName);
icon?.appendChild(weatherIcon);
//IWeather

const weatherDescription = document.createElement("p");
const wind = document.createElement("p");

weatherIcon.src =
  "http://openweathermap.org/img/w/" + weatherForcast.weather[0].icon + ".png";
weatherDescription.innerHTML = weatherForcast.weather[0].description;
wind.innerHTML = "Vind: " + weatherForcast.wind.speed + " m/s";

weatherDescription.innerHTML = weatherForcast.weather[0].description;
wind.innerHTML = "Vind: " + weatherForcast.wind.speed + " m/s";

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

interface IMoviesLassiResponse {
  Search: IMoviesLassi[];
}

async function searchMovies() {
  try {
    const movieData = await axios.get<IMoviesLassiResponse>(
      "https://www.omdbapi.com/?s=lassie&ref&&apikey=73e393cc&i=tt0110305"
    );

    const container = document.getElementById("dogMovies");

    if (container) {
      movieData.data.Search.forEach(async (movie) => {
        const movieCard = document.createElement("div") as HTMLDivElement;
        movieCard.className = "movie-card";

        const movieTitle = document.createElement("h3") as HTMLHeadingElement;
        movieTitle.className = "movie-title";
        movieTitle.innerHTML = movie.Title;

        const movieImg = document.createElement("img") as HTMLImageElement;
        movieImg.className = "movie-img";
        movieImg.setAttribute("src", movie.Poster);

        // Lägg till skapade element till container
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieImg);
        container.appendChild(movieCard);
      });
    }
  } catch {
    console.error("Ett fel uppstod vid hämtning av poster");
  }
}

// Anropa searchMovies när sidan laddas
window.addEventListener("load", searchMovies);

// animation on scroll
const sections = document.querySelectorAll(".section");

const observerOptions = {
  root: null,
  threshold: 0.5,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    } else {
      entry.target.classList.remove("in-view");
    }
  });
}, observerOptions);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
