// Поясни, як ініціалізувати таймер без перезавантаження, бо я здурію)))
// Поняття не маю, для чого зробила кнопку стопу, мабуть просто щоб було видно, що старт неактивний
// Стоп актуальний хіба, якби можна було новий час поставити зразу(((((

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  clockFace: document.querySelector('.timer'),
  dayValue: document.querySelector('[data-days]'),
  hoursValue: document.querySelector('[data-hours]'),
  minutesValue: document.querySelector('[data-minutes]'),
  secundesValue: document.querySelector('[data-seconds]'),
};
refs.startBtn.setAttribute('disabled', 'disabled');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const finishDate = new Date(selectedDates[0]);
    const utsFinishDate = finishDate.getTime();
    const currentTime = Date.now();
    const past = utsFinishDate < currentTime;
    const future = utsFinishDate > currentTime;
    if (future) {
      refs.startBtn.removeAttribute('disabled', 'disabled');
    }
    if (past) {
      window.alert('Please choose a date in the future');
    }
    refs.startBtn.addEventListener('click', () => {
      timer.start(utsFinishDate, currentTime);
    });

    refs.stopBtn.addEventListener('click', () => {
      timer.stop();
    });
  },
};
flatpickr('#datetime-picker', options);

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.init();
  }
  init() {
    const time = this.convertMs(0);
    this.onTick(time);
  }

  start(finishTime, currentTime) {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = finishTime - currentTime;
      const time = this.convertMs(deltaTime);

      this.onTick(time);
      this.timeStop(deltaTime);
    }, 1000);
  }
  timeStop(deltaTime) {
    if (deltaTime < 1000) {
      timer.stop();
      window.alert('YOU DIED!!!!!');
    }
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.convertMs(0);
    this.onTick(time);
  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = pad(Math.floor(ms / day));
    const hours = pad(Math.floor((ms % day) / hour));
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
  }
}
function pad(value) {
  return String(value).padStart(2, '0');
}

const timer = new Timer({
  onTick: updateTimerFace,
});
function updateTimerFace({ days, hours, minutes, seconds }) {
  refs.dayValue.textContent = `${days}`;
  refs.hoursValue.textContent = `${hours}`;
  refs.minutesValue.textContent = `${minutes}`;
  refs.secundesValue.textContent = `${seconds}`;
}
