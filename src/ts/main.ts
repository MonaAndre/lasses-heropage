import '../style/style.scss';
import { getQuote } from './services/axiosServices';

const quoteBtn = document.getElementById("getbtn") as HTMLButtonElement;
quoteBtn?.addEventListener("click",async ()=>{
    await getQuote()
});


