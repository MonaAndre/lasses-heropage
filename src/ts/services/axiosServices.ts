import { IQuote } from "../Moduls/IQuote";
import { get } from "./serviceBase";
import { IDog } from "../models/IDog";
import { IWeatherResponse } from "../models/IWeatherResponse";

export const getQuotes = async (): Promise<IQuote[]> => {
  const url = "https://type.fit/api/quotes";
  const data = await get<IQuote[]>(url);
  return data;
};

export const getRandomIndex = (): number => {
  const randomIndex = Math.floor(Math.random() * 16);
  console.log(randomIndex);
  return randomIndex;
};

export const drawQuote = (quote: IQuote) => {
  const title = document.querySelector(".quote__text") as HTMLHeadElement;
  title.innerHTML = quote.text;
  const author = document.querySelector(".quote__author") as HTMLHeadElement;
  author.innerHTML = quote.author;
};
export const generateDogs = async () => {
  const url = "https://api.thedogapi.com/v1/images/search?limit=3";
  const data = await get<IDog[]>(url);
  return data;
};

export const weatherResponse = async (): Promise<IWeatherResponse> => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=59.3293&lon=18.0686&appid=22c22c81677a5afd72f6f4410a4a4c57&units=metric";
  const data = await get<IWeatherResponse>(url);
  return data;
};
