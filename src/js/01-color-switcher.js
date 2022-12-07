function getRandomHexColor() {
  const randomColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
  console.log(randomColor);
  return randomColor;
}

const colorChanger = {
  isActive: false,
  startColor() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  },
  stopColor() {
    this.isActive = false;
    clearInterval(this.intervalId);
  },
};
const startBtn = document.querySelector(`[data-start]`);
const stoptBtn = document.querySelector(`[data-stop]`);

startBtn.addEventListener(`click`, (evt) => {
  colorChanger.startColor();
});
stoptBtn.addEventListener(`click`, (evt) => {
  colorChanger.stopColor();
});
