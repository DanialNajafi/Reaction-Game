const startButton = document.getElementById('startBtn');
const box = document.getElementById('box');
const result = document.getElementById('result');  
const timerDisplay = document.getElementById('timer');
const delay = Math.random() * 3000 + 1000; // 1-4s
let startTime, timeout;

    startButton.addEventListener('click', () => {
        startBtn.style.display = 'none';
        result.textContent = '';
        box.style.display = 'none';
        delay;
        timerDisplay.textContent = '⏱️ Warte auf das Signal...';
        timeout = setTimeout(() => {
          box.style.backgroundColor = '#2ecc71';
          box.textContent = 'Click!';
          box.style.display = 'block';
          startTime = new Date().getTime();
        }, delay);
    });
    box.addEventListener('click', () => {
        const clickTime = new Date().getTime();
        const reactionTime = clickTime - startTime;
        result.textContent = `⏱️ Deine Reaktionszeit: ${reactionTime} ms`;
        timerDisplay.textContent = '';
        box.style.display = 'none';
        startBtn.style.display = 'inline-block';
        box.style.backgroundColor = '#ccc';
        box.textContent = '';
        clearTimeout(timeout);
      });