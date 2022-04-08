
export default class bac {
    constructor() {
        this.result = {};
        this.items = [];
        this.round = 9;
        this.history = [];
        this.attempt = null;
        this.pc = null;
        this.player = [];
        this.bulls = 0;
        this.cows = 0;
        this.people = null;
        this.container = null;
        this.playernum = null;
        this.win = [];
        this._init();
    };
    _init() {
        this.botNumber();
        console.log(this.pc);
        this.attempt = document.querySelector("#winner");
        this.container = document.querySelector("#result");
        document.querySelector(".att").onclick = () => this.game();
    }
    botNumber() {
        const result = [];
        while (result.length < 4) {
            const rndNumber = Math.floor(Math.random() * 10);
            if (!result.includes(rndNumber)) {
                result.push(rndNumber);
            }
        }
        this.pc = result;
    }
    game() {
        this.attempt.value = "Осталось попыток: " + this.round;
        this._endPlay();
        --this.round;
        this.result = {};
        this.container = document.querySelector(".result");
        this.add();
    }
    input() {
        this.playernum = document.querySelector("#peopleNumber").value;
        this.player = this.playernum.split("");
        document.querySelector("#peopleNumber").value = null;
    }
    gameInfo() {
        for (let i = 0; i <= this.pc.length - 1; i++) {
            for (let j = 0; j <= this.player.length - 1; j++) {
                if (this.pc[i] == this.player[j] && i == j) {
                    this.bulls++;
                } else if (this.pc[i] == this.player[j] && i != j) {
                    this.cows++;
                }
            }
        }
        console.log(this.cows + ": Коров " + this.bulls + ": Быков");
    }

    info() {
        this._init()
        this.round = 10;
        this.items = [];
    }

    _endPlay() {
        this.input();
        this.gameInfo();
        if (this.bulls === 4) {
            this.attempt.value = "вы победили";
            this.info();
            this.player = 'Победа';
        } else if (!this.round) {
            this.attempt.value = "вы проиграли , компьютер :" + this.pc;
            this.info();
            this.player = 'Проиграли';
        }
    }
    add() {
        this.items.push({
            people: this.player,
            bulls: this.bulls,
            cows: this.cows,
        });
        console.log(this.items)
        this._render();
    }
    _render() {
        const templateAll = this.items.reduce((acc, item) => {
            acc += this.getTemplate(item);
            return acc;
        }, "");
        this.container.innerHTML = templateAll;
        this.bulls = 0;
        this.cows = 0;
    }
    getTemplate(item) {
        const { people, bulls, cows } = item;
        return `
    <div class="card">
      <div>
        <span class="prop">Вы:</span>
        <span class="value">${people}</span>
      </div>
      <div>
        <span class="prop">Быки:</span>
        <span class="value">${bulls}</span>
      </div>
      <div>
        <span class="prop">Коровы:</span>
        <span class="value">${cows}</span>
      </div>
    </div>
  `;
    }
};
