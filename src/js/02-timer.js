refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  clockFace: document.querySelector('.timer'),
  dayValue: document.querySelector('[data-days]'),
  hoursValue: document.querySelector('[data-hours]'),
  minutesValue: document.querySelector('[data-minutes]'),
  secundesValue: document.querySelector('[data-seconds]'),
};

const timer = {
  start() {
    const startTime = Date.now();
    console.log(startTime);

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      console.log(`${days} :: ${hours} :: ${mins} :: ${secs}`);

      // console.log(new Date(deltaTime).getUTCHours());
    }, 1000);
  },
};
timer.start();
function pad(value) {
  return String(value).padStart(2, '0');
}
function getTimeComponents(time) {
  const days = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24))
  );
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / 1000));
  return { days, hours, mins, secs };
}
function updateTimerFace({ days, hours, mins, secs }) {
  refs.dayValue.textContent = `${days}`;
  refs.hoursValue.textContent = `${hours}`;
  refs.minutesValue.textContent = `${mins}`;
  refs.secundesValue.textContent = `${secs}`;
}
updateTimerFace();
