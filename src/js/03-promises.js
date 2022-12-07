import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const promiseResult = { position, delay };
    setTimeout(() => {
      if (shouldResolve) {
        resolve(promiseResult);
      } else {
        reject(promiseResult);
      }
    }, delay);
  });

  return promise;
}

const form = document.querySelector(`.form`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const formElements = evt.currentTarget.elements;
  const delay = parseInt(formElements.delay.value);
  const step = parseInt(formElements.step.value);
  const amount = parseInt(formElements.amount.value);
  const formData = {
    delay,
    step,
    amount,
  };
  console.log(formData);

  for (let i = 0; i <= amount - 1; i++) {
    console.log(i);
    const realDelay = delay + step * i;

    const newPromise = createPromise(i, realDelay);

    newPromise
      .then(({ position, delay }) => {
        Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
