function updateClock() {

    const now = new Date();
    let hours = now.getHours();
    // const amPm = hours >= 12 ? "PM" : "AM";
    // hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    let minutes = now.getMinutes().toString().padStart(2, 0);
    let seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").textContent = timeString

}

updateClock();
setInterval(updateClock, 1000)