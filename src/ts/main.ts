import '../style/style.scss';
import { getQuotes, getRandomIndex , drawQuote } from './services/axiosServices';

const title = document.createElement("h2") as HTMLHeadingElement;
title.className="quote__text"
const quoteContainer = document.getElementById("quote");
quoteContainer?.appendChild(title);

const author = document.createElement("h4") as HTMLHeadingElement;
author.className="quote__author"
quoteContainer?.appendChild(author);


const quoteBtn = document.getElementById("getbtn") as HTMLButtonElement;
quoteBtn?.addEventListener("click",async ()=>{
    const quotes= await getQuotes();
    drawQuote(quotes[getRandomIndex()]);
    
});
