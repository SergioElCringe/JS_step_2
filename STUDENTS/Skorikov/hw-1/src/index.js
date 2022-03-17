import './css/main.css';

import { bullsAndCows } from './components/game-bulls-and-cows.js';

const play = new bullsAndCows();

play;

document.querySelector('.form__button').onclick = () => play.bullsAndCows.run();