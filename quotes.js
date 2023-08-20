const quotes = [
  {
    span: "Rome was not built in a day.",
    person: "",
  },
  { span: "slow and steady win the race", person: "" },
  {
    span: "No pain no gain.",
    person: "",
  },
  {
    span: "Practice makes perfect.",
    person: "",
  },
  { span: "Knowledge is power.", person: "" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNumber = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomNumber];

quote.innerHTML = randomQuote.span;
author.innerHTML = randomQuote.person;
