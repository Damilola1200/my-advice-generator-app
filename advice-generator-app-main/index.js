const adviceIdSpan = document.getElementById("Advice-id");
const quoteDiv = document.getElementById("Advice");
const adviceButton = document.getElementById("generator");
const adviceContent = document.getElementById("Advice-cont");

const url = "https://api.adviceslip.com/advice";

async function Advice () {
 const res = await fetch (url)
 const {slip:{id,advice}} = await res.json();
 adviceIdSpan.innerHTML = id;
 adviceContent.innerHTML = advice
}

Advice()

adviceButton.addEventListener("click",Advice)