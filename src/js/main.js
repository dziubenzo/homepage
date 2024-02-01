import '../css/main.scss';

import facebookIconSrc from '../assets/facebook.svg';
import gitHubIconSrc from '../assets/github.svg';
import liveDemoIconSrc from '../assets/live-demo.svg';
import battleshipSrc from '../assets/battleship.png';
import weatherAppSrc from '../assets/weather-app.png';
import todoListSrc from '../assets/todo-list.png';
import ticTacToeSrc from '../assets/tic-tac-toe.png';
import librarySrc from '../assets/library.png';
import calculatorSrc from '../assets/calculator.png';
import phoneIconSrc from '../assets/phone.svg';
import emailIconSrc from '../assets/email.svg';

function loadImages() {
  const facebookIcons = document.querySelectorAll('img[alt="Facebook Icon"]');
  facebookIcons.forEach((icon) => {
    icon.src = facebookIconSrc;
  });
  const gitHubIcons = document.querySelectorAll('img[alt="GitHub Icon"]');
  gitHubIcons.forEach((icon) => {
    icon.src = gitHubIconSrc;
  });
  const liveDemoIcons = document.querySelectorAll('img[alt="Live Demo Icon"]');
  liveDemoIcons.forEach((icon) => {
    icon.src = liveDemoIconSrc;
  });
  const battleshipScreenshot = document.querySelector('img[alt*="Battleship"]');
  battleshipScreenshot.src = battleshipSrc;
  const weatherAppScreenshot = document.querySelector(
    'img[alt*="Weather App"]',
  );
  weatherAppScreenshot.src = weatherAppSrc;
  const todoListScreenshot = document.querySelector('img[alt*="Todo List"]');
  todoListScreenshot.src = todoListSrc;
  const ticTacToeScreenshot = document.querySelector('img[alt*="Tic-Tac-Toe"]');
  ticTacToeScreenshot.src = ticTacToeSrc;
  const libraryScreenshot = document.querySelector('img[alt*="Library"]');
  libraryScreenshot.src = librarySrc;
  const calculatorScreenshot = document.querySelector('img[alt*="Calculator"]');
  calculatorScreenshot.src = calculatorSrc;
  const phoneIcon = document.querySelector('img[alt="Phone Icon"]');
  phoneIcon.src = phoneIconSrc;
  const emailIcon = document.querySelector('img[alt="Email Icon"]');
  emailIcon.src = emailIconSrc;
}

loadImages();
