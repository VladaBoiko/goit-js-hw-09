import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  let currentDelay = Number(delay.value);
  const currentStep = Number(step.value);
  const currentAmount = Number(amount.value);

  for (let i = 1; i <= currentAmount; i += 1) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay} ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay} ms`);
      });
    currentDelay += currentStep;
  }
});

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
};
