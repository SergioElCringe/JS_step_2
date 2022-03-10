import './css/main.css';
import { methods } from './components/component.js';

const test = [1, 2, 3];

const a = test.map(el => el * 100);

function main() {
  methods.hello();
  methods.bye();
};

main();
