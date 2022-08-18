function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
refs.stopBtn.disabled = true;
refs.startBtn.addEventListener('click', () => {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  colorId = setInterval(() => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = `${color}`;
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  refs.startBtn.disabled = false;
  clearInterval(colorId);
  refs.stopBtn.disabled = true;
});
