export default class BullsAndCows {
    goal = null;
    rounds = 10;
    play = true;
    history = [];
    bulls = null;

    constructor() {
        this._init();
    }

    _init() { 
        this.goal = this.getNumber();
        this.container = document.querySelector('#result');
        console.log(this.goal);
    }

    randomize() {
        return Math.floor(Math.random() * 10);
    }

    gamePlay() {
        this.process();
    }

    getNumber() {
        const result = [];
        while (result.length < 4) {
            const rndNumber = this.randomize();
            if (!result.includes(rndNumber)) {
                result.push(rndNumber);
            }
        }
        return result;
    }

    process() {
        if (this.play) {
            if (this.rounds) {
                let userVariant = [...document.querySelector('#number').value];
                this.play = this.check(this.goal, userVariant);
                this.play ? --this.rounds : alert('Вы выиграли!');
            } else {
                this.play = false;
                alert('Вы проиграли :(');
            }
        };
    }

    check(riddle, userVariant) {
        let bulls = 0;
        let cows = 0;
        let rounds = this.rounds;
        for (let i = 0; i < 4; i++) {
            if (riddle[i] === +userVariant[i]) {
                bulls++;
            } else if (riddle.includes(+userVariant[i])) {
                cows++;
            }
        }
        
        this.history.push({
            userVariant,
            bulls,
            cows,
            rounds,
        });
        this.render();
        return bulls === 4 ? false : true;
    }

    render() {
        let templateAll = '';
        this.history.forEach(item => templateAll += this.getTemplate(item));
        this.container.innerHTML = templateAll;
    }

    getTemplate(item) {
        const { userVariant, bulls, cows, rounds } = item;
        return `
        <div class="card">
            <p>Number: ${userVariant}</p>
            <p>Bulls: ${bulls}</p>
            <p>Cows: ${cows}</p>
            <p>Rounds left: ${rounds}</p>
        </div>
        `;
    }
};