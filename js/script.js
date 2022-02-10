'use strict';
const userName = document.querySelector('.login__username');
const userPassword = document.querySelector('.login__password');
const loginBtn = document.querySelector('.login__btn');
const loginWrapper = document.querySelector('.loginWrapper');
const welcomeMessage = document.querySelector('.login__welcome-msg');
const wrongPassMsg = document.querySelector('.login__wrong-pass');
const mainWrapper = document.querySelector('.mainWrapper');

const gameInterface = document.querySelectorAll('.game__interface');

// Game zero
const gameZeroQuestions = [
  {
    true: "There's a company that turns dead bodies into an ocean reef.",
    true: 'It would only take one hour to drive to space.',
    false:
      'There are more submarines in lakes right now than there are in the oceans.',
  },
  {
    true: 'You can buy a flying bicycle.',
    true: 'Dolphins sleep with one eye open.',
    false: 'One of the rings of Saturn is almost pure silver dust.',
  },
  {
    true: "McDonald's introduced drive-through service due to the military.",
    true: "Pigs don't sweat.",
    false: 'In Brazil they call Brazil nuts ‘Argentines’.',
  },
  {
    true: 'The fuller the fridge, the more energy-efficient it is.',
    true: 'One quarter of all your bones are located in your feet.',
    false:
      'On average, three people are injured every time an audience gives a standing ovation.',
  },
  {
    true: "You're more likely to get a computer virus from visiting religious sites than porn sites.",
    true: 'The inventor of the Pringles can is now buried in one.',
    false: 'The banana tree is the tallest growing grass in the world.',
  },
];
// const username = document.querySelector('');
// const username = document.querySelector('');

// functions
// remake to async await
const hideLogin = (user) => {
  loginWrapper.classList.add('fade');
  setTimeout(() => {
    loginWrapper.classList.add('displayNone');
    welcomeMessage.classList.remove('displayNone');
    welcomeMessage.classList.add('fadeInOut');
    setTimeout(() => {
      welcomeMessage.classList.add('displayNone');
      welcomeMessage.classList.remove('fadeInOut');
      // animation for main
      //fadeIn
      mainWrapper.classList.add('fadeIn');
      mainWrapper.classList.remove('displayNone');
      mainWrapper.classList.remove('noOpacity');
      setTimeout(() => {
        mainWrapper.classList.remove('fadeIn');
      }, 4000);
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

// game buttons logic

const showGameButtons = (el) => {
  Array.from(el.children).forEach((el) => {
    el.classList.toggle('displayNone');
  });
  setTimeout(() => {
    Array.from(el.children).forEach((el) => {
      el.classList.remove('noOpacity');
    });
  }, 500);
};
gameInterface.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn__participate')) showGameButtons(this);
    // console.log(this);
  });
});
