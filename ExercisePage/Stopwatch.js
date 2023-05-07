// Get the HTML elements that we'll be interacting with
const stopwatch = document.getElementById("stopwatch");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

// Set up our initial values for time
let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;

// Update the stopwatch display with the current time
function updateStopwatch() {
  // Format the time into a string
  const timeString =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  // Update the stopwatch display
  document.getElementById("stopwatch").textContent = timeString;
}

// Start the stopwatch
function startStopwatch() {
  document.getElementById("reset").style.display="inline";
  document.getElementById("pause").style.display="inline";
  document.getElementById("start").style.display="none";
  intervalId = setInterval(() => {
    // Increment the time by one second
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }

    // Update the stopwatch display
    updateStopwatch();
  }, 1000);
}

// Pause the stopwatch
function pauseStopwatch() {
  clearInterval(intervalId);
  intervalId = null;
  document.getElementById("pause").style.display="none";
  document.getElementById("resume").style.display="inline";
}

//Resume the stopwatch
function resumeStopwatch() {
  document.getElementById("resume").style.display="none";
  document.getElementById("pause").style.display="inline";
  intervalId = setInterval(() => {
    // Increment the time by one second
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }

    // Update the stopwatch display
    updateStopwatch();
  }, 1000);
}
// Reset the stopwatch
function resetStopwatch() {
  
    let label = "Good workout for ";
    if (hours > 9)
    {
        label += hours;
    }
    else
    {
        label += "0" + hours;
    }

    label += ":";

    if (minutes > 9)
    {
        label += minutes
    }
    else
    {
        label += "0" + minutes;
    }

    label += ":";

    if (seconds > 9)
    {
        label += seconds;
    }
    else
    {
        label += "0" + seconds;
    }

    label += "! Keep up the good work.";
    document.getElementById("textChange").textContent = label;
  // Reset the time values
  hours = 0;
  minutes = 0;
  seconds = 0;

  // Stop the stopwatch
  pauseStopwatch();

  // Update the stopwatch display
  updateStopwatch();

  //show the start stopwatch button again
  document.getElementById("start").style.display="inline";

  //hide the reset, pause, and resume buttons
  document.getElementById("reset").style.display="none";
  document.getElementById("pause").style.display="none";
  document.getElementById("resume").style.display="none";
}