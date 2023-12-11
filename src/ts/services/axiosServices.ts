import { IQuote } from "../Moduls/IQuote";
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
