const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const ellipsis = document.querySelectorAll(".ellipsis");
const hours = document.querySelectorAll(".hours-text");
const lastHours = document.querySelectorAll(".previous-hours");

fetch("data.json")
  .then((res) => res.json())
  .then((data) => (finalData = data));

daily.addEventListener("click", () => {
  weekly.classList.toggle("active", false);
  monthly.classList.toggle("active", false);
  daily.classList.toggle("active");

  for (let index = 0; index <= 5; index++) {
    hours[index].innerHTML = finalData[index].timeframes.daily.current;
    lastHours[index].innerHTML = finalData[index].timeframes.daily.previous;
  }
});

weekly.addEventListener("click", () => {
  daily.classList.toggle("active", false);
  monthly.classList.toggle("active", false);
  weekly.classList.toggle("active");

  for (let index = 0; index <= 5; index++) {
    hours[index].innerHTML = finalData[index].timeframes.weekly.current;
    lastHours[index].innerHTML = finalData[index].timeframes.weekly.previous;
  }
});

monthly.addEventListener("click", () => {
  daily.classList.toggle("active", false);
  weekly.classList.toggle("active", false);
  monthly.classList.toggle("active");

  for (let index = 0; index <= 5; index++) {
    hours[index].innerHTML = finalData[index].timeframes.monthly.current;
    lastHours[index].innerHTML = finalData[index].timeframes.monthly.previous;
  }
});
