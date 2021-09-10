const targetDate = new Date("29 Sept 2021");
const d = document.getElementById("d");
const h = document.getElementById("h");
const m = document.getElementById("m");
const s = document.getElementById("s");
var i;

function countDown() {
    const currDate = new Date();
    const diff = (targetDate - currDate) / 1000;

    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor(diff / 3600 % 24);
    const minutes = Math.floor(diff / 60 % 60);
    const seconds = Math.floor(diff % 60);

    d.innerHTML = days <= 0 ? 0: days;
    h.innerHTML = hours <= 0 ? 0: hours;
    m.innerHTML = minutes <= 0 ? 0: minutes;
    s.innerHTML = seconds <= 0 ? 0: seconds;
    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        console.log("clearing interval");
        clearInterval(i);
    }
}

countDown();
i = setInterval(countDown, 1000);