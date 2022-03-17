import "./css/style.scss";
import BullsAndCows from "./components/bullsAndCows";

const startPlay = new BullsAndCows();

startPlay;

document.querySelector('#move').onclick = () => startPlay._getWinner(startPlay.getComputerChoice());
document.querySelector('#play').onclick = () => startPlay._startNewGame();