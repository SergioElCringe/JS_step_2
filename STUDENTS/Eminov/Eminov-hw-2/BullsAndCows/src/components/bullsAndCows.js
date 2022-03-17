export default class BullsAndCows {
    constructor() {
        this.container = null;
        this.inputChoice = null;
        this.computerChoice = [];
        this.playerChoice = null;
        this.selectedNumbers = [];
        this.attempts = 10;
        this.history = [];
        this.play = true;
        this._init();
    }

    _init() {
        this.container = document.querySelector('#result-attempt');
        this.inputChoice = document.querySelector('#inputChoice');
    }

    getPlayerChoice() {
        this._init();

        this.selectedNumbers.push({
            playerNumber: this.inputChoice.value,
        });

        return [...this.selectedNumbers[this.selectedNumbers.length - 1].playerNumber];
    }

    _getRandom() {
        return Math.floor(Math.random() * 10);
    }

    getComputerChoice() {
        let randomNumber = null;

        while (this.computerChoice.length < 4) {
            randomNumber = this._getRandom();

            if (!this.computerChoice.includes(randomNumber)) {
                this.computerChoice.push(randomNumber);
            };
        };

        return this.computerChoice;
    }

    _checkValues(inputValue, hiddenValue) {
        let bulls = 0;
        let cows = 0;

        for (let i = 0; i < 4; i++) {
            if (hiddenValue[i] === +inputValue[i]) {
                bulls++
            } else if (hiddenValue.includes(+inputValue[i])) {
                cows++;
            };
        };

        this.history.push({
            choice: inputValue,
            bulls: bulls,
            cows: cows,
            left: (--this.attempts),
        });

        this._render();

        return bulls === 4;
    }

    _getWinner(computerChoice) {
        let result = null;

        if (this.play) {
            if (this.attempts > 0) {
                this.playerChoice = this.getPlayerChoice();
                result = this._checkValues(this.playerChoice, computerChoice);

                if (result) {
                    this.play = false;
                    alert('Поздравляю! Вы победили.');
                };
            } else {
                this.play = false;
                alert(`К сожалению, вы проиграли! Загаданное число компьютером было ${computerChoice}`);
            };
        };
    }

    _startNewGame() {
        this.container.innerHTML = '';
        this.playerChoice = [];
        this.computerChoice = [];
        this.history = [];
        this.attempts = 10;
        this.play = true;
    }

    _render() {
        let templateAll = '';
        this.history.forEach(item => templateAll += this._getTemplate(item));
        this.container.innerHTML = templateAll;
    }

    _getTemplate(item) {
        return `
        <div class="result-attempt">
            <p>Выбранная вами комбинация: <b>${item.choice}</b>. Быки: <b>${item.bulls}</b>, коровы: <b>${item.cows}</b>. Осталось: <b>${item.left} попыток!</b></p>
        </div>
        `;
    }
};
