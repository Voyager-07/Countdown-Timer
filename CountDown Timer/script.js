let timerInterval;
let targetTime;
let isRunning = false;

function updateTimerDisplay() {
  const timerElement = document.getElementById("timer");
  const remainingTime = targetTime - Math.floor((Date.now() / 1000));
  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    timerElement.textContent = "00:00:00";
    isRunning = false;
    return;
  }
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  timerElement.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  if (!isRunning) {
    const timeInput = document.getElementById("timeInput").value;
    if (!timeInput || isNaN(timeInput)) {
      alert("Please enter a valid time in seconds.");
      return;
    }
    targetTime = Math.floor(Date.now() / 1000) + parseInt(timeInput);
    isRunning = true;
    updateTimerDisplay();
    timerInterval = setInterval(updateTimerDisplay, 1000);
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function resetTimer() {
  stopTimer();
  timer.innerText = "00:00:00"   
}
