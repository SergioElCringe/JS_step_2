export default class BullsAndCows {
    constructor() {
        this.result = {};
        this.attempts = 9;
        this.secret = [];
        this.history = [];
        this.inputField = null;
        this.historyContainer = null;
        this.controlBtn = null;
        this.resultBlock = null;
    }

    init() {
        this.inputField = document.querySelector('.form__input');
        this.historyContainer = document.querySelector('.history');
        this.controlBtn = document.querySelector('.form__button');
        this.resultBlock = document.querySelector('.result');
        this.generateSecret();
        this.handleEvents();
        console.log('secret: ' + this.secret);
    }

    handleEvents() {
        this.controlBtn.addEventListener("click", this.run.bind(this));
    }

    run() {
        const attempt = this.attempts;
        this.result = {
            attempt: attempt,
            answer: null,
            bulls: 0,
            cows: 0,
        };
        this.attempts--;
        this.getUserInput();
        this.checkInput();
        this.saveMove();
        this.checkEnd();
        this.render();
    }

    generateSecret() {
        while (this.secret.length < 4) {
            const num = Math.floor(Math.random() * 10);
            if (!this.secret.includes(num)) {
                this.secret.push(num);
            }
        }
    }

    getUserInput() {
        this.result.answer = [...this.inputField.value].map(el => +el);
        this.inputField.value = null;
    }

    checkInput() {
        this.result.answer.forEach((el, index) => {
            if (this.secret.includes(el)) {
                this.secret.indexOf(el) === index ? this.result.bulls++ : this.result.cows++;
            }
        });
    }

    saveMove() {
        this.history.push(this.result);
    }

    render() {
        this.historyContainer.classList.remove('history_hidden');
        const str = this.history.reduce((accum, current) => {
            const { attempt, answer, bulls, cows } = current;
            const template = `
                            <div class="card">
                                <ul class="card__list">
                                    <li class="card__list-header">
                                        <span class="white-text">{</span>
                                    </li>
                                    <li class="card__list-text">
                                        <span class="light-blue-text">remaining attempts:</span>
                                        <span class="olive-text">${attempt}</span><span class="white-text">,</span>
                                    </li>
                                    <li class="card__list-text">
                                        <span class="light-blue-text">answer:</span>
                                        <span class="olive-text">${answer.join('')}</span><span class="white-text">,</span>
                                    </li>
                                    <li class="card__list-text">
                                        <span class="light-blue-text">bulls:</span>
                                        <span class="olive-text">${bulls}</span><span class="white-text">,</span>
                                    </li>
                                    <li class="card__list-text">
                                        <span class="light-blue-text">cows:</span>
                                        <span class="olive-text">${cows}</span>
                                    </li>
                                    <li class="card__list-footer">
                                        <span class="white-text">},</span>
                                    </li>
                                </ul>
                            </div>
                        `;
            return accum + template;
        }, '');
        this.historyContainer.innerHTML = str;
    }

    checkEnd() {
        if (this.result.bulls === 4) {
            this.resultBlock.innerText = 'You win!';
            this.inputField.style.display = 'none';
            this.controlBtn.style.display = 'none';

        } else if (this.attempts < 0) {
            this.resultBlock.innerText = 'You loose!';
            this.inputField.style.display = 'none';
            this.controlBtn.style.display = 'none';
        }
    }

}
