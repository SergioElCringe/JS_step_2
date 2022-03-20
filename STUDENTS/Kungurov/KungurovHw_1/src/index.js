import './css/main.css';

const app = {
  numbersContainer: null,
  output: null,
  outputValue: '',
  operators: '',
  input : null,
  eve : null,
  result : null,
  end : null,

  init() {
    this.eve = document.querySelector('#res')
    this.output = document.querySelector('#output');
    this.numbersContainer = document.querySelector('#numbers');
    this.operators = document.querySelector('.operators');
    this.handleEvents();
    this.end = document.querySelector('.event');
    this.end.addEventListener('click', this.resultat.bind(this))
  },

  handleEvents() {
    this.numbersContainer.addEventListener('click', this.addNumber.bind(this));
    this.operators.addEventListener('click', this.addOperators.bind(this));
  },

  resultat(evt) {
    if (evt.target.id === 'conv'){
      this.draw();
    } else if (evt.target.id === 'back'){
      this.delete();
    }else if (evt.target.id === 'equals'){
      this.equals();
    };
  },

  addOperators(evt) {
    if (evt.target.tagName === 'BUTTON') {
        const { target: { dataset: { operator } } } = evt;
        this.outputValue += operator;
        this.output.value = this.outputValue;
      };
  },
  addNumber(evt) {
    if (evt.target.tagName === 'BUTTON') {
        const { target: { dataset: { number } } } = evt;
        this.outputValue += number;
        this.output.value = this.outputValue;

      };
  },
  equals() {
    this.output.value = eval(this.outputValue)
    this.outputValue = '';
  },
  delete() {
    this.outputValue = '';
    this.output.value = null;
  },
  draw() {
    this.output.value = eval(this.outputValue);
    const arr = this.output.value;
    this.output.value = arr * -1;
    this.outputValue = this.output.value;
  },
};
app.init();