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
let isActive = false;
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColors() {
  const idx = randomIntegerFromInterval(0, colors.length - 1);
  body.style.backgroundColor = colors[idx];
};

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);
  
function onStart() {
  if(isActive) {
    return;
  };

  intervalId = setInterval(changeColors, 1000);
  isActive = true;
  console.log("click");
};

function onStop() {
  clearInterval(intervalId);
  isActive = false;
  console.log("setInterval stopped!");
};