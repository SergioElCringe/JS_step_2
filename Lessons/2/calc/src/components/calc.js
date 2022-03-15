
export default class Calculator {
  constructor() {
    this.numbersContainer = null;
    this.output = null;
    this.outputValue = '';
    this._init();
  }

  _init() {
    this.output = document.querySelector('#output');
    this.numbersContainer = document.querySelector('#numbers');
    
    this._handleEvents();
    console.log(this)
  }

  _handleEvents() {
    this.numbersContainer.addEventListener('click', this.addNumber.bind(this));
  }

  addNumber(evt) {
    const { target: { dataset: { number } } } = evt;
    this.outputValue += number;
    this.output.value = this.outputValue;
  }
};
