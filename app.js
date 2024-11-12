let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

function start() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0); // Resume from the last time
        tInterval = setInterval(getShowTime, 1); // Update the time every millisecond
        running = true;
    }
}

function stop() {
    clearInterval(tInterval); // Stop the interval
    running = false; // Set running to false
}

function reset() {
    clearInterval(tInterval); // Stop the interval
    running = false; // Reset running status
    difference = 0; // Reset the difference
    document.getElementById("display").innerHTML = "00:00:00"; // Reset display
}

function getShowTime() {
    updatedTime = new Date().getTime(); // Get the current time
    difference = updatedTime - startTime; // Calculate the difference
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate hours
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes
    let seconds = Math.floor((difference % (1000 * 60)) / 1000); // Calculate seconds
    let milliseconds = Math.floor((difference % 1000) / 10); // Calculate milliseconds

    // Format time with leading zeros
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    // Display time
    document.getElementById("display").innerHTML = `${hours}:${minutes}:${seconds}`;
}
