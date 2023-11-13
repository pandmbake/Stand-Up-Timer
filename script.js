// Function to format the time in MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  // Function to update the timer
  function updateTimer() {
    timerElement.textContent = formatTime(timerSeconds);
    timerSeconds++;

    // Check if the timer reaches 30 minutes
    if (timerSeconds >= 1800) {
      stopTimer();
      playAudio();
    }
  }

  // Function to start the timer
  function startTimer() {
    clearInterval(timerInterval); // Clear existing interval
    timerSeconds = 0;
    timerInterval = setInterval(updateTimer, 1000);
  }

  // Function to stop the timer
  function stopTimer() {
    clearInterval(timerInterval);
  }

  // Function to play the audio
  function playAudio() {
    const audio = document.getElementById('audio');
    audio.play();
  }

  const timerElement = document.getElementById('timer');
  let timerSeconds = 0;
  let timerInterval;