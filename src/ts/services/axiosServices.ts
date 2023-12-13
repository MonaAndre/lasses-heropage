
import { IQuote } from "../Moduls/IQuote";

import { get } from "./serviceBase";

import { IDog } from "../models/IDog";
import { get } from "./serviceBase";


export const getQuote = async (): Promise<IQuote[]> => {
  const url = "https://type.fit/api/quotes";
  const data = await get<IQuote[]>(url);
  const randomIndex = Math.floor(Math.random() * 16);
  console.log(
    "text:" + data[randomIndex].text,
    "author:" + data[randomIndex].author
  );
  const title = document.createElement("h2") as HTMLHeadingElement;
  const quoteContainer = document.getElementById("quote");
  title.innerHTML = data[randomIndex].text;
  quoteContainer?.appendChild(title);

  return data;
  
};
};


export const generateDogs = async () => {
  const url = "https://api.thedogapi.com/v1/images/search?limit=3";
  const data = await get<IDog[]>(url);
  return data;
};
import { IWeatherResponse } from "../models/IWeatherResponse";
import { get } from "./serviceBase";

export const weatherResponse = async (): Promise<IWeatherResponse> =>{
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=59.3293&lon=18.0686&appid=22c22c81677a5afd72f6f4410a4a4c57&units=metric"
    const data = await get<IWeatherResponse>(url);
    return data;
}

//api key: 22c22c81677a5afd72f6f4410a4a4c57