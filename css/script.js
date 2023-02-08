var timerDisplay = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var stopBtn = document.getElementById("stop-btn");
var lapBtn = document.getElementById("lap-btn");
var resetBtn = document.getElementById("reset-btn");
var lapsList = document.getElementById("laps");

var miliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var timerInterval;
var isRunning = false;

startBtn.addEventListener("click", startTimer);
lapBtn.addEventListener("click", lapTimer);
resetBtn.addEventListener("click", resetTimer);
stopBtn.addEventListener("click", stopTimer);

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timerInterval = setInterval(updateTimer, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function lapTimer() {
  if (!isRunning) return;
  var lap = document.createElement("li");
  lap.innerText = timerDisplay.innerText;
  lapsList.appendChild(lap);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerDisplay.innerText = "00:00:00:00";
  lapsList.innerHTML = "";
  miliseconds=0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  isRunning = false;
}

function updateTimer() {
  if (!isRunning) return;

  miliseconds++;
  if (miliseconds >= 100) {
    miliseconds = 0;
    seconds++;
  }

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  timerDisplay.innerText =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds) +
    ":" +
    (miliseconds > 9? miliseconds : "0" + miliseconds);
}

