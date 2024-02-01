import '../css/main.scss';

import facebookIconSrc from '../assets/facebook.svg';
import gitHubIconSrc from '../assets/github.svg';

function loadImages() {
  const facebookIcons = document.querySelectorAll('img[alt="Facebook Icon"]');
  facebookIcons.forEach((icon) => {
    icon.src = facebookIconSrc;
  });
  const gitHubIcons = document.querySelectorAll('img[alt="GitHub Icon"]');
  gitHubIcons.forEach((icon) => {
    icon.src = gitHubIconSrc;
  });
}

loadImages();
