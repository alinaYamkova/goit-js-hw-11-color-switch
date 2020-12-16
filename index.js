const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-action=start]');
const stopBtn = document.querySelector('button[data-action=stop]');
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// const idx = randomIntegerFromInterval(1, 6);

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);
  
function onStart() {
  if (onStop) {
    clearInterval(intervalId);
    return;
  }; 

  intervalId = setInterval(() => {
    const randomColor = colors[randomIntegerFromInterval(1, 6)];
    console.log(randomColor);
    body.style.backgroundColor = randomColor;
  }, 1000);
};

function onStop() {
  clearInterval(intervalId);
  console.log("setInterval stopped!");
};
