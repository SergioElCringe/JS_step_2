const startCalc = () => {
    const calculator = {
        container: null,
        a: '',
        b: '',
        lastNubmer: '',
        sign: '',
        lastSign: '',
        output: '',
        history: '',
        numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-'],
        operators: ['+', '-', 'Х', '/', '='],
        value: '',

        init() {
            this.output = document.querySelector('#output');
            this.container = document.querySelector('#agregats');
            this.history = document.querySelector('#history');

            this.handleEvents();
        },

        handleEvents() {
            this.container.addEventListener('click', this.addNumber.bind(this));
        },

        addNumber(event) {
            if (this.numbers.includes(event.target.textContent) || this.operators.includes(event.target.textContent)) {
                this.value = event.target.textContent;

                if (this.operators.includes(this.value)) {
                    this.sign = this.value;
                    return;
                };

                if (this.numbers.includes(this.value)) {
                    if (!this.b && (!this.sign || this.sign === '=')) {
                        this.a += this.value;
                        this.output.textContent = this.a;
                    } else if (this.a && this.sign) {
                        this.b += this.value;
                        this.output.textContent = this.b;
                    } else if (this.b) {
                        this.b += this.value;
                        this.output.textContent = this.a;
                    };

                    this.history.textContent = this.a + this.sign + this.b;
                    return;
                };
            };
        },

        check(a, sign, b) {
            if (sign) {
                switch (sign) {
                    case '+':
                        {
                            this.a = (+a) + (+b);
                            this.lastNubmer = (+b);
                            this.output.textContent = this.a;
                            this.b = '';
                            this.lastSign = sign;
                            break;
                        };

                    case '-':
                        {
                            this.a = a - b;
                            this.lastNubmer = b;
                            this.output.textContent = this.a;
                            this.b = '';
                            this.lastSign = sign;
                            break;
                        };

                    case 'Х':
                        {
                            this.a = a * b;
                            this.lastNubmer = b;
                            this.output.textContent = this.a;
                            this.b = '';
                            this.lastSign = sign;
                            break;
                        };

                    case '/':
                        {
                            if (b === '0') {
                                this.a = 'Error';
                            } else {
                                this.a = a / b;
                                this.lastNubmer = b;
                            };

                            this.output.textContent = this.a;
                            this.b = '';
                            this.lastNubmer = sign;
                            break;
                        };
                };

                return a;
            };
        },

        getTotal() {
            if (!(this.sign === '=' && this.a && !this.b)) {
                this.check(this.a, this.sign, this.b);
            } else {
                this.check(this.a, this.lastSign, this.lastNubmer);
            };
        },

        clearAll() {
            this.a = '';
            this.b = '';
            this.sign = '';
            this.output.textContent = '';
            this.history.textContent = '';
        },

        clearLastNumber(a, b) {
            if (a && !b) {
                this.a = Number(a.toString().slice(0, -1));

                if (!a) {
                    this.a = '';
                };

                this.output.textContent = this.a;
            } else if (a && b) {
                this.b = b.slice(0, -1);
                this.output.textContent = this.b;
            };
        },

        changeSign(a, b) {
            if (a && !b) {
                this.a = -(a);
                this.output.textContent = this.a;
            };
        },

        getDot(a, b) {
            let dot = '.';

            if (a && !b) {
                if (!String(this.a).includes('.')) {
                    this.a += dot;
                };

                this.output.textContent = this.a;
            } else if (a && b) {
                if (!b.includes('.')) {
                    this.b += dot;
                };

                this.output.textContent = this.b;
            };

            return this.a;
        },

        getOnePercentOfNumber(a) {
            this.a = (a / 100);
            this.output.textContent = this.a;
        },
    };

    calculator.init();

    document.querySelector('#total').onclick = () => calculator.getTotal();
    document.querySelectorAll('.check').onclick = () => calculator.check(calculator.a, calculator.sign, calculator.b);
    document.querySelector('#clear').onclick = () => calculator.clearLastNumber(calculator.a, calculator.b);
    document.querySelector('#clearAll').onclick = () => calculator.clearAll();
    document.querySelector('#percent').onclick = () => calculator.getOnePercentOfNumber(calculator.a);
    document.querySelector('#changeSign').onclick = () => calculator.changeSign(calculator.a, calculator.b);
    document.querySelector('#dot').onclick = () => calculator.getDot(calculator.a, calculator.b);
};

export const calculation = { startCalc };