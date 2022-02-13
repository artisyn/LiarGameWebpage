'use strict';
const userName = document.querySelector('.login__username');
const userPassword = document.querySelector('.login__password');
const loginBtn = document.querySelector('.login__btn');
const loginWrapper = document.querySelector('.loginWrapper');
const welcomeMessage = document.querySelector('.login__welcome-msg');
const wrongPassMsg = document.querySelector('.login__wrong-pass');
const mainWrapper = document.querySelector('.mainWrapper');
const displayBalance = document.querySelector('.player__balance');
const playerNumber = document.querySelector('.player__number');
const playerName = document.querySelector('.player__name');
const spinBtn = document.querySelector('.spin__button');
const wheel = document.querySelector('.spinner__wheel');

const gameInterface = document.querySelectorAll('.game__interface');
const playBtn = document.querySelectorAll('.btn__play');
const betBtn = document.querySelectorAll('.btn__bet');

//main logic components
let playerBalance = 100000000;
// displayBalance

// const username = document.querySelector('');
// const username = document.querySelector('');

// functions

const logosArrayfromNum = (logosAmount) => {
  let logosArr = [];

  for (let i = 0; i < logosAmount; i++) {
    logosArr.push(i);
  }

  let randNum = Math.floor(Math.random() * logosArr.length);
  const logo1 = logosArr[randNum];
  logosArr = logosArr.filter((item) => item !== logo1);
  randNum = Math.floor(Math.random() * logosArr.length);
  const logo2 = logosArr[randNum];
  logosArr = logosArr.filter((item) => item !== logo2);
  randNum = Math.floor(Math.random() * logosArr.length);
  const logo3 = logosArr[randNum];
  logosArr = logosArr.filter((item) => item !== logo3);
  return [logo1, logo2, logo3];
};

// Capitalize
const capitalise = (str) => {
  let x = str.trim();
  x.includes(' ')
    ? (x = x
        .split(' ')
        .map((word) => word.replace(word[0], word[0].toUpperCase()))
        .join(' '))
    : (x = x.replace(x[0], x[0].toUpperCase()));

  return x;
};

function arrShuffle(arr) {
  var rand, temp, i;

  for (i = arr.length - 1; i > 0; i -= 1) {
    rand = Math.floor((i + 1) * Math.random()); //get random between zero and i (inclusive)
    temp = arr[rand]; //swap i and the zero-indexed number
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// remake to async await
const hideLogin = (user) => {
  // add userNumber
  playerNumber.innerText = Math.floor(Math.random() * 14);
  // add userName
  playerName.innerText = capitalise(user);
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

//////////// login logic

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const pass = +userPassword.value;
  const user = userName.value;
  userPassword.value = '';

  if (pass === 3334) hideLogin(user);
  if (pass !== 3334) displayBadPass();
});
////////////////////////////////////////////////////////////////
//////////// Main logic
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
// bet logic

const updateBalanceBet = (betAmount) => {
  playerBalance -= betAmount;
  displayBalance.innerText = +playerBalance;
};
const updateBalanceWin = (winAmount) => {
  playerBalance += winAmount;
  displayBalance.innerText = +playerBalance;
};

const revealGameHideBet = (target) => {
  const parent = target.closest('section');
  const gameContainer = parent.querySelector('.game__container');
  const gameInterface = parent.querySelector('.game__interface');
  gameContainer.classList.remove('noOpacity', 'noClick');
  setTimeout(() => {
    gameInterface.classList.add('noOpacity', 'noClick');
  }, 1000);
};

const placeBet = (target) => {
  const parent = target.closest('section');
  const betAmount = parent.querySelector('.money__input').value;
  const betDisplay = parent.querySelector('.bet__amount');
  betDisplay.innerText = +betDisplay.innerText + +betAmount;
  updateBalanceBet(betAmount);
};
const revealNext = (hide, reveal) => {
  // Hide current
  document.querySelector(hide).classList.add('noClick');
  // Reveal next game
  document.querySelector(reveal).classList.remove('noClick');
};
/////////////////////////////////////////////////////

const functionStarter = (num, gameContainer) => {
  if (num === 0) gameZero(gameContainer);
  if (num === 1) gameOne(gameContainer);
  if (num === 2) gameTwo(gameContainer);
  if (num === 3) console.log(' game 3');
  if (num === 4) console.log(' game 4');
};

// Game Zero
const gameZeroQuestions = [
  {
    correct1: "There's a company that turns dead bodies into an ocean reef.",
    correct2: 'It would only take one hour to drive to space.',
    incorrect:
      'There are more submarines in lakes right now than there are in the oceans.',
  },
  {
    correct1: 'You can buy a flying bicycle.',
    correct2: 'Dolphins sleep with one eye open.',
    incorrect: 'One of the rings of Saturn is almost pure silver dust.',
  },
  {
    correct1:
      "McDonald's introduced drive-through service due to the military.",
    correct2: "Pigs don't sweat.",
    incorrect: 'In Brazil they call Brazil nuts "Argentines".',
  },
  {
    correct1: 'The fuller the fridge, the more energy-efficient it is.',
    correct2: 'One quarter of all your bones are located in your feet.',
    incorrect:
      'On average, three people are injured every time an audience gives a standing ovation.',
  },
  {
    correct1:
      "You're more likely to get a computer virus from visiting religious sites than porn sites.",
    correct2: 'The inventor of the Pringles can is now buried in one.',
    incorrect: 'The banana tree is the tallest growing grass in the world.',
  },
];

const gameZero = (gameContainer) => {
  const betMoney = +gameContainer
    .closest('section')
    .querySelector('.bet__amount').innerText;

  // Random logic

  // create an array of logoNumbers
  let logosArr = logosArrayfromNum(5); // logos amount is hardcoded inside function

  // pick question obj
  let questionsObj =
    gameZeroQuestions[Math.floor(Math.random() * gameZeroQuestions.length)];

  const qArr = [];
  Object.entries(questionsObj).forEach(([key, value]) => {
    qArr.push([key, value]);
  });
  let preparedQuestions = arrShuffle(qArr);
  preparedQuestions = arrShuffle(preparedQuestions);

  const questionsMarkup = `

  <div class="questions__blockg0">
						<div class="g0__question g0_q1" data-answer="${preparedQuestions[0][0]}" >
							<div class="g0__icon">
								<img src="./images/face${logosArr[0]}.jpg" alt="face" />
                
							</div>
							<p class="g0__text">
              ${preparedQuestions[0][1]}
							</p>
              <div class="expose__liar noOpacity">liar</div>
						</div>
						<div class="g0__question g0_q2" data-answer="${preparedQuestions[1][0]}">
							<div class="g0__icon">
								<img src="./images/face${logosArr[1]}.jpg" alt="face" />
               
							</div>

							<p class="g0__text">
								${preparedQuestions[1][1]}
							</p>
              <div class="expose__liar noOpacity">liar</div>
						</div>
						<div class="g0__question g0_q3" data-answer="${preparedQuestions[2][0]}">
							<div class="g0__icon">
								<img src="./images/face${logosArr[2]}.jpg" alt="face" />
                
							</div>
							<p class="g0__text">
								${preparedQuestions[2][1]}
							</p>
              <div class="expose__liar noOpacity">liar</div>
						</div>
					</div>
          

  `;
  gameContainer.insertAdjacentHTML('beforeend', questionsMarkup);
  // adding click logic
  gameContainer.querySelectorAll('.g0__question').forEach((question) => {
    question.addEventListener('click', (e) => {
      if (e.target.dataset.answer === 'incorrect') {
        winGame();
      }

      if (e.target.dataset.answer !== 'incorrect') {
        looseGame();
      }

      gameContainer.querySelectorAll('.g0__question').forEach((question) => {
        if (question.dataset.answer === 'incorrect') {
          //// liar icon

          question.querySelector('.expose__liar').classList.remove('noOpacity');
        }
      });
    });
  });

  const winMarkup = `
  <div class="g0__result win__color" data-correct="">
						<span class="g0__result-text"
							>Ohh.. You are not easily deceived! Your reward:
						</span>
						<span class="g0__result-amount">${betMoney * 2}</span>
						<span> You may proceed to the next <span class="letter__red">game</span>.
					</div>
  `;
  const looseMarkup = `
  <div class="g0__result loose__color" data-correct="">
						<span class="g0__result-text"
							>How can you be so Naive! You lost:
						</span>
						<span class="g0__result-amount">${betMoney}</span>
						<span> You may proceed to the next <span class="letter__red">game</span>.
					</div>
  `;

  const looseGame = () => {
    gameContainer.insertAdjacentHTML('beforeend', looseMarkup);
    //Reveal next game
    revealNext('.game__zero', '.game__one');
    // document.querySelector('.game__one').classList.remove('noClick');
    // // Hide current
    // document.querySelector('.game__zero').classList.add('noClick');
  };
  const winGame = () => {
    updateBalanceWin(betMoney * 2);
    gameContainer.insertAdjacentHTML('beforeend', winMarkup);
    // Reveal next game
    revealNext('.game__zero', '.game__one');
  };
};

//Game One
const fakeArtArr = [
  {
    type: 'fake',
    name: 'Made by Computer',
    src: './images/fakeArt/fake1.jpg',
  },
  {
    type: 'fake',
    name: 'Made by Computer',
    src: './images/fakeArt/fake2.jpg',
  },
  {
    type: 'fake',
    name: 'Made by Computer',
    src: './images/fakeArt/fake3.jpg',
  },
  {
    type: 'fake',
    name: 'Made by Computer',
    src: './images/fakeArt/fake4.jpg',
  },
  {
    type: 'fake',
    name: 'Made by Computer',
    src: './images/fakeArt/fake5.jpg',
  },
  {
    type: 'fake',
    name: 'Made by Computer',
    src: './images/fakeArt/fake6.jpg',
  },
];

const realArtArr = [
  {
    type: 'real',
    name: 'Gustav Klimt - Kiss',
    src: './images/trueArt/klimt.jpg',
  },
  {
    type: 'real',
    name: 'da Vinci - Princess',
    src: './images/trueArt/davinci.jpg',
  },
  {
    type: 'real',
    name: 'Picasso - Vollard',
    src: './images/trueArt/picasso.jpg',
  },
  {
    type: 'real',
    name: 'Rembrandt - Storm on the Sea',
    src: './images/trueArt/rembrandt.jpg',
  },
  {
    type: 'real',
    name: 'Salvador Dali - Civil War',
    src: './images/trueArt/dali.jpg',
  },
  {
    type: 'real',
    name: 'Van Gogh - Cafe Terrace',
    src: './images/trueArt/vangogh.jpg',
  },
];

const gameOne = (gameContainer) => {
  const betMoney = +gameContainer
    .closest('section')
    .querySelector('.bet__amount').innerText;

  let artArrays = [
    fakeArtArr[Math.floor(Math.random() * fakeArtArr.length)],
    realArtArr[Math.floor(Math.random() * realArtArr.length)],
  ];
  artArrays = artArrays.sort((a, b) => 0.5 - Math.random());

  const artMarkup = `
  <div class="game__one-art">
  					<div class="art ${artArrays[0].type}" data-art-name="${artArrays[0].name}" >
  						<img src="${artArrays[0].src}" alt="art" />
  <div class="artist noOpacity">${artArrays[0].name}</div>
  					</div>
  					<div class="art ${artArrays[1].type}"data-art-name="${artArrays[1].name}">
  						<img
  							src="${artArrays[1].src}"
  							alt="art"
  						/>
              <div class="artist noOpacity">${artArrays[1].name}</div>
  					</div>
  				</div>
  `;
  gameContainer.insertAdjacentHTML('beforeend', artMarkup);
  const winMarkup = `<div class="g0__result win__color" data-correct="">
  <span class="g0__result-text"
    >Your Artistic Taste is top-notch! Your reward:
  </span>
  <span class="g0__result-amount">${betMoney * 2}</span>
  <span> Proceed to the next <span class="letter__red">game</span>. 
</div> `;
  const looseMarkup = `<div class="g0__result loose__color" data-correct="">
  <span class="g0__result-text"
    >Hmm, not an Art person at all... Your loss:
  </span>
  <span class="g0__result-amount">${betMoney}</span>
  <span> Proceed to the next <span class="letter__red">game</span>. 
</div> `;

  const g1Win = () => {
    gameContainer.insertAdjacentHTML('beforeend', winMarkup);
    updateBalanceWin(betMoney * 2);
    revealNext('.game__one', '.game__two');
  };
  const g1Loose = () => {
    gameContainer.insertAdjacentHTML('beforeend', looseMarkup);
    revealNext('.game__one', '.game__two');
  };

  gameContainer.querySelectorAll('.art').forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target.classList.contains('real')) g1Win();
      if (e.target.classList.contains('fake')) g1Loose();
      gameContainer
        .querySelectorAll('.artist')
        .forEach((el) => el.classList.remove('noOpacity'));
      gameContainer.classList.add('noClick');
    });
  });
};

////////////////////////////////////
//game two
const gameTwo = (gameContainer) => {
  spinBtn.addEventListener('click', (e) => {
    let i = randomInt(6, 12);
    console.log(i);
    wheel.style.transform = `rotate(${90 * i}deg)`;
  });
};

// event Listeners

gameInterface.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn__participate')) showGameButtons(this);
  });
});

playBtn.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const gameNum = +e.target.dataset.gameNumber;
    functionStarter(
      gameNum,
      e.target.closest('section').querySelector('.game__container')
    );

    revealGameHideBet(e.target);
  });
});

betBtn.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    placeBet(e.target);
  });
});
