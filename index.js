let currentTime = new Date();
let h5 = document.querySelector("h5");
let date = currentTime.getDate();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];
h5.innerHTML = `${day} ${date}, ${hours}:${minutes}`;
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let showCity = document.querySelector("#current-city");
  showCity.innerHTML = searchInputElement.value;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
