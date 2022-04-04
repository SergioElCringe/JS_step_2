export default class myGame {
    constructor() {
        this.bulls = 0;
        this.cows = 0;
        this.round = 9;
        this.roundAttempt = null;
        this.playerAttempt = null;
        this.playerArray = [];
        this.playerNumber = null;
        this.computerNumber = null;
        this.result = {};
        this.datas = [];
        this.container = null;
        this._init();
    };

    randomNum() {
        return Math.floor(Math.random() * 10);
    };

    compNumber() {
        const result = [];
        while (result.length < 4) {
            const randomNumber = randomNum();
            if (result.indexOf(randomNumber) < 0 ) {
                result.push(randomNumber);
            };
        };
        this.computerNumber = result;
    };

    _init() {
        this.compNumber();
        console.log(this.computerNumber);
        this.roundAttempt = document.querySelector("#attemptNum");
        this.container = document.querySelector("#result");
        document.querySelector(".game__play-btn").onclick = () => this.gameProcess();
    };

    getInput() {
        this.playerNumber = document.querySelector("#playerNum").value;
        this.playerArray = this.playerNumber.split("");
        document.querySelector("#playerNum").value = null;
    };

    gameProcess() {
        this.roundAttempt.value = "У вас осталось " + this.round + " попыток!";
        this.gameResults();
        --this.round;
        this.result = {};
        this.container = document.querySelector(".result");
        this.getInformation();
    };

    publishResults(item) {
        const { playerAttempt, bulls, cows } = item;
        return `
            <div class="card">
                <div>
                    Ваш ответ: <span class="card__answer">${ playerAttempt }</span> <br>
                    Коровы: <span class="card__answer">${ cows }</span> <br>
                    Быки: <span class="card__answer">${ bulls }</span>
                </div>
            </div>
        `;
    };

    _render() {
        const total = this.datas.reduce((accum, item) => {
            accum += this.publishResults(item);
            return accum;
        }, "");
        this.container.innerHTML = total;
        this.bulls = 0;
        this.cows = 0;
    };

    getInformation() {
        this.datas.push({
            playerAttempt: this.playerArray,
            bulls: this.bulls,
            cows: this.cows,
        });
        console.log(this.datas)
        this._render();
    };

    userAttempts() {
        for (let i = 0; i <= this.computerNumber.length - 1; i++) {
            for (let j = 0; j <= this.playerArray.length - 1; j++) {
                if (this.computerNumber[i] == this.playerArray[j] && i == j) {
                    this.bulls++;
                } else if (this.computerNumber[i] == this.playerArray[j] && i != j) {
                    this.cows++;
                }
            }
        }
    };

    gameResults() {
        this.getInput();
        this.userAttempts();
        if (this.bulls === 4) {
            this.roundAttempt.value = "Поздравляем! Вы победили XD!";
            this._init()
            this.round = 10;
            this.datas = [];
            this.playerArray = 'Победа';
        } else if (!this.round) {
            this.roundAttempt.value = "К сожалению, Вы проиграли >_<! Правильный ответ: " + this.computerNumber;
            this._init()
            this.round = 10;
            this.datas = [];
            this.playerArray = 'Поражение';
        }
    };
};