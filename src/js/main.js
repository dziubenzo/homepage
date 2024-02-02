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
import defaultImageFooterSrc from '../assets/image-footer.jpg';
import smallScreenImageFooterSrc from '../assets/image-footer-tablet-mobile.jpg';
import defaultImageHeaderSrc from '../assets/image-header.jpg';
import tabletImageHeaderSrc from '../assets/image-header-tablet.jpg';
import mobileImageHeaderSrc from '../assets/image-header-mobile.jpg';

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

  // Art direction
  // Header
  const imageHeaderPicture = document.querySelector('header picture');
  const defaultImageHeader = imageHeaderPicture.querySelector('img');
  defaultImageHeader.src = defaultImageHeaderSrc;
  const tabletImage = imageHeaderPicture.querySelector(
    'source[media="(min-width: 601px) and (max-width: 1000px)"]',
  );
  tabletImage.srcset = tabletImageHeaderSrc;
  const mobileImage = imageHeaderPicture.querySelector(
    'source[media="(max-width: 600px)"]',
  );
  mobileImage.srcset = mobileImageHeaderSrc;
  // Footer
  const imageFooterPicture = document.querySelector('footer picture');
  const defaultImageFooter = imageFooterPicture.querySelector('img');
  defaultImageFooter.src = defaultImageFooterSrc;
  const smallScreenImage = imageFooterPicture.querySelector(
    'source[media="(max-width: 1000px)"]',
  );
  smallScreenImage.srcset = smallScreenImageFooterSrc;
}

loadImages();
