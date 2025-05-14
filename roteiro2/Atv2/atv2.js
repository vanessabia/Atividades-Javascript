let startTime = null;
    let intervalId = null;
    const times = { time1: null, time2: null, time3: null };

    const elapsedTimeDisplay = document.getElementById("elapsed-time");
    const time1Display = document.getElementById("time1-display");
    const time2Display = document.getElementById("time2-display");
    const time3Display = document.getElementById("time3-display");


    document.getElementById("start").addEventListener("click", () => {
      if (!intervalId) {
        startTime = Date.now();
        intervalId = setInterval(() => {
          const elapsed = Date.now() - startTime;
          elapsedTimeDisplay.textContent = `Tempo Total: ${elapsed} ms`;
        }, 10);
      }
    });

    document.getElementById("time1").addEventListener("click", () => {
      if (startTime) {
        times.time1 = Date.now() - startTime;
        time1Display.textContent = `Time 1: ${times.time1} ms`;
      }
    });

    document.getElementById("time2").addEventListener("click", () => {
      if (startTime) {
        times.time2 = Date.now() - startTime;
        time2Display.textContent = `Time 2: ${times.time2} ms`;
      }
    });

    document.getElementById("time3").addEventListener("click", () => {
      if (startTime) {
        times.time3 = Date.now() - startTime;
        time3Display.textContent = `Time 3: ${times.time3} ms`;
      }
    });

    document.getElementById("stop").addEventListener("click", () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    });

    document.getElementById("reset").addEventListener("click", () => {
      clearInterval(intervalId);
      intervalId = null;
      startTime = null;
      elapsedTimeDisplay.textContent = "Tempo Total: 0 ms";
      time1Display.textContent = "Time 1: ---";
      time2Display.textContent = "Time 2: ---";
      time3Display.textContent = "Time 3: ---";
      Object.keys(times).forEach(key => (times[key] = null));
    });