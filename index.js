const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const milisecondsEl = document.getElementById("miliseconds");
const newYearDate = new Date("Jan 1, 2024, 00:00:00:00").getTime();

updateCountdown();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYearDate - now;
    const miliseconds = 10;
    const seconds = 1000;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / seconds);
    const ms = Math.floor((gap % seconds) / miliseconds);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    milisecondsEl.innerText = ms;

    setTimeout(updateCountdown, miliseconds);
}