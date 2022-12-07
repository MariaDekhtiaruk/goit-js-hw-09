import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// function
// setInterval(timerLoad, 1000);

class CountDownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.refs = {
      daysRef: document.querySelector(`${this.selector} [data-days]`),
      hoursRef: document.querySelector(
        `${this.selector} [data-hours]`
      ),
      minutesRef: document.querySelector(
        `${this.selector} [data-minutes]`
      ),
      secondsRef: document.querySelector(
        `${this.selector} [data-seconds]`
      ),
    };
    const options = {
      enableTime: true,
      time_24hr: true,
      defaultDate: targetDate,
      minuteIncrement: 1,
      onClose(selectedDates) {
        console.log(selectedDates[0]);
      },
    };
    this.dateTimePicker = document.querySelector('#datetime-picker');
    flatpickr(this.dateTimePicker, options);
  }
  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor(
      (((ms % day) % hour) % minute) / second
    );

    return { days, hours, minutes, seconds };
  }
  addLeadingZero = (number) => number.toString().padStart(2, '0');

  timerLoad() {
    console.log('this', this);
    const todayDate = new Date();

    const targetDate = new Date(this.dateTimePicker.value);
    if (targetDate < todayDate) {
      clearInterval(this.interval);
      return Notify.warning('Please choose a date in the future');
    }
    const ms = targetDate - todayDate;
    const dateObj = this.convertMs(ms);

    this.refs.daysRef.textContent = this.addLeadingZero(dateObj.days);
    this.refs.hoursRef.textContent = this.addLeadingZero(
      dateObj.hours
    );
    this.refs.minutesRef.textContent = this.addLeadingZero(
      dateObj.minutes
    );
    this.refs.secondsRef.textContent = this.addLeadingZero(
      dateObj.seconds
    );
  }

  startTimer() {
    this.interval = setInterval(this.timerLoad.bind(this), 1000);
  }
}

const timer = new CountDownTimer({
  selector: '.timer.first',
  targetDate: new Date('2023-01-01 00:00'),
});

const startBtn = document.querySelector(`[data-start]`);

startBtn.addEventListener(`click`, (evt) => {
  timer.startTimer();
});
