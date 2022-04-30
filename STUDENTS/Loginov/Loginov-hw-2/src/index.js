import './css/main.css';

import bullsAndCows from './components/bulls';

const startNewGame = new bullsAndCows;

startNewGame;

document.querySelector('#click').onclick = () => startNewGame.gamePlay();
