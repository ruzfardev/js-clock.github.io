const secHand = document.querySelector(".sec");
const minHand = document.querySelector(".min");
const hourHand = document.querySelector(".hour");
const data = document.querySelector(".date");
const digitalHour = document.querySelector(".digital-hour");
const digitalMin = document.querySelector(".digital-min");
const digitalSec = document.querySelector(".digital-sec");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
////
const date = new Date();
data.textContent = `${date.getDate()} _ ${months[date.getMonth()]} `;
setInterval(() => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, 0);
  const min = String(now.getMinutes()).padStart(2, 0);
  const sec = String(now.getSeconds()).padStart(2, 0);
  digitalHour.textContent = hours;
  digitalMin.textContent = min;
  digitalSec.textContent = sec;
  console.log(`${hours}:${min}:${sec}`);
}, 1000);

///
const setClock = function () {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secHand, secondsRatio);
  setRotation(minHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
};

const setRotation = function (element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
};
setInterval(setClock, 1000);

setClock();
