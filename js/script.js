'use strict';
const userName = document.querySelector('.userLogin__form--username');
const userPassword = document.querySelector('.userLogin__form--password');
const loginBtn = document.querySelector('.userLogin__form--btn');
const loginWrapper = document.querySelector('.loginWrapper');
const welcomeMessage = document.querySelector('.welcomeMessage');
// const username = document.querySelector('');
// const username = document.querySelector('');

// functions

const hideLogin = () => {
  loginWrapper.classList.add('fade');
  setTimeout(() => {
    loginWrapper.classList.add('displayNone');
    welcomeMessage.classList.remove('displayNone');
    welcomeMessage.classList.add('fadeInOut');
    setTimeout(() => {
      welcomeMessage.classList.add('displayNone');
    }, 6000);
  }, 4000);
};

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const pass = +userPassword.value;

  if (pass === 3334) hideLogin();
});
