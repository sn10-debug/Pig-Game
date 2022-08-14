'use strict';
let dice = document.querySelector('.dice');
dice.classList.add('hidden');
let score1 = document.querySelector('#score--0');
let score2 = document.getElementById('score--1'); //this type of selecting elements is used for id only.
score1.textContent = 0;
score2.textContent = 0;
let currentplayer1 = document.getElementById('current--0');
let currentplayer2 = document.getElementById('current--1');
let roll = document.querySelector('.btn--roll');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let hold = document.querySelector('.btn--hold');
roll.addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    let num = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${num}.png`;
    if (num !== 1) {
      currentplayer1.textContent = Number(currentplayer1.textContent) + num;
    } else {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      currentplayer1.textContent = 0;
    }
  } else if (player2.classList.contains('player--active')) {
    let num = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${num}.png`;
    if (num !== 1) {
      currentplayer2.textContent = Number(currentplayer2.textContent) + num;
    } else {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
      currentplayer2.textContent = 0;
    }
  }
});

hold.addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
    score1.textContent =
      Number(currentplayer1.textContent) + Number(score1.textContent);
    currentplayer1.textContent = 0;
  } else if (player2.classList.contains('player--active')) {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    score2.textContent =
      Number(currentplayer2.textContent) + Number(score2.textContent);
    currentplayer2.textContent = 0;
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  score1.textContent = 0;
  score2.textContent = 0;
  currentplayer1.textContent = 0;
  currentplayer2.textContent = 0;
  if (!player1.classList.contains('player--active')) {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }
});
//Bug fixing and check.
