import "./styles.css";

const calendar = document.querySelector("#clock span:first-child");
const times = document.querySelector("#clock span:last-child");
const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function currentTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const years = String(date.getFullYear());
  const months = String(date.getMonth() + 1).padStart(2, "0");
  const dates = String(date.getDate()).padStart(2, "0");
  const days = week[date.getDay()];

  calendar.innerText = `${days}, ${dates}. ${months}. ${years}.`;
  times.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(currentTime, 1000);
