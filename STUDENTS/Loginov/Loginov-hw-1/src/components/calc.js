const app = {
    container: null,
    output: '',
    outputValue: '',
    a: '',
    b: '',
    sign: '',
    value: '',
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'],
    operators: ['+', '-', 'x', '/'],
    clear() {
        this.a = '';
        this.b = '';
        this.sign = '';
        this.output.value = '';
    },


    init() {
        this.output = document.querySelector('#output');
        this.container = document.querySelector('#numbers')

        this.handleEvents();
    },

    handleEvents() {
        this.container.addEventListener('click', this.addNumber.bind(this));
    },

    addNumber(event) {
        this.value = event.target.textContent;
        if (this.numbers.includes(this.value)) {
            if (this.b === '' && this.sign === '') {
                this.a += this.value;
                this.output.value = this.a;
            }
            else if (this.a !== '' && this.b !== '' && this.finish) {
                this.b = this.value;
                this.finish = false;
                this.output.value = this.b;
            }
            else {
                this.b += this.value;
                this.output.value = this.b;
            }

        }
        if (this.operators.includes(this.value)) {
            this.sign = this.value;
            this.output.value = this.sign;
        }
        if (this.value === '=') {
            switch (this.sign) {
                case '+':
                    this.a = (+this.a) + (+this.b);
                    break;
                case '-':
                    this.a = this.a - this.b;
                    break;
                case 'x':
                    this.a = this.a * this.b;
                    break;
                case '/':
                    this.a = this.a / this.b;
                    break;
            }
            finish = true;
            this.output.value = this.a;
        }
        console.log(this.a, this.b, this.sign);
    },

    changeSign() {
        if (this.b !== '') {
            this.b = -this.b;
            this.output.value = this.b;
        }
        else {
            this.a = -this.a;
            this.output.value = this.a;
        }
    },

    backspace() {
        if (this.b !== '') {
            this.b = this.b.slice(0, -1);
            this.output.value = this.b;
        }
        else if (this.a !== '' && this.b === '') {
            this.a = this.a.slice(0, -1);
            this.output.value = this.a;
        }
    }
}
app.init();
document.querySelector('#ac').onclick = () => app.clear();
document.querySelector('#change').onclick = () => app.changeSign();
document.querySelector('#backspace').onclick = () => app.backspace();