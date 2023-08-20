const background = document.body.querySelector(".mashimaro");

const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const chosenImgs = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img");
bgImg.src = `startImg/${chosenImgs}`;

background.appendChild(bgImg);
