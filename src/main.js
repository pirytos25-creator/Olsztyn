import './style.css';
import { initIntro } from './intro.js';
import { initGame } from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  // Start the cinematic intro
  initIntro(() => {
    // When intro finishes, initialize the game map
    initGame();
  });
});
