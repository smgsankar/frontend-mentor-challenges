let hours = 0;
let minutes = 0;
let seconds = 0;

const hourCard = document.querySelector('calendar-card[mode="hours"]');
const minuteCard = document.querySelector('calendar-card[mode="minutes"]');
const secondCard = document.querySelector('calendar-card[mode="seconds"]');

function updateTime() {
  const now = new Date();
  if (now.getHours() !== hours) {
    hours = now.getHours();
    hourCard.setAttribute('value', hours);
  }
  if (now.getMinutes() !== minutes) {
    minutes = now.getMinutes();
    minuteCard.setAttribute('value', minutes);
  }
  if (now.getSeconds() !== seconds) {
    seconds = now.getSeconds();
    secondCard.setAttribute('value', seconds);
  }
}

function init() {
  updateTime();
  setInterval(updateTime, 1000);
}

init();