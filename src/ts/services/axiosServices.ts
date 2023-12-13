import { IQuote } from "../Moduls/IQuote";
import { get } from "./serviceBase";

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
  author.innerHTML =  quote.author;
};
