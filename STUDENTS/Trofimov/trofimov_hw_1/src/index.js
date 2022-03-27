import './src/style/css/base.css';
import './src/style/css/bulls_cows.css';
import './src/style/css/main.css';

import { methods } from './src/js/script.js';

function main () {
    document.querySelector('#gameProcess').onclick = () => methods.gameProcess();
};

main();
