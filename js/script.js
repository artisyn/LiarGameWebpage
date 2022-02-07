'use strict';
const userName = document.querySelector('.login__username');
const userPassword = document.querySelector('.login__password');
const loginBtn = document.querySelector('.login__btn');
const loginWrapper = document.querySelector('.loginWrapper');
const welcomeMessage = document.querySelector('.login__welcome-msg');
const wrongPassMsg = document.querySelector('.login__wrong-pass');
// const username = document.querySelector('');
// const username = document.querySelector('');

// functions

const hideLogin = (user) => {
  loginWrapper.classList.add('fade');
  setTimeout(() => {
    loginWrapper.classList.add('displayNone');
    welcomeMessage.classList.remove('displayNone');
    welcomeMessage.classList.add('fadeInOut');
    setTimeout(() => {
      welcomeMessage.classList.add('displayNone');
      welcomeMessage.classList.remove('fadeInOut');
      /// user
    }, 6000);
  }, 4000);
};
const displayBadPass = () => {
  wrongPassMsg.classList.remove('noOpacity');
  setTimeout(() => {
    wrongPassMsg.classList.add('noOpacity');
  }, 2000);
};

// login logic

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const pass = +userPassword.value;
  const user = userName.value;
  userPassword.value = '';

  if (pass === 3334) hideLogin(user);
  if (pass !== 3334) displayBadPass();
});

// header logic
