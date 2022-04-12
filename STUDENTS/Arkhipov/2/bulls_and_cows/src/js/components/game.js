export default class Game {
	constructor() {
		this.goal = null;
		this.rounds = 10;
		this.play = true;
		this.history = [];
		this.infoItems = [];
		this.resultContainer = null;// блок с данными
		this.finishContainer = null;
		this.roundContainer = null;
		this.finishResult = "win";
		this.start = document.querySelector('#start');
		this.start.addEventListener('click', this._init.bind(this));
	}
	_init() {
		this.resultContainer = document.querySelector('.result');
		this.finishContainer = document.querySelector('.finish');
		this.roundContainer = document.querySelector("#round");
		this.goal = this._getNumber();
		console.log(this.goal);//специально оставил как пасхалку
		this._renderRoundAll();
		const tryButton = document.querySelector('#try');
		tryButton.addEventListener("click", () => {
			this._process();
			this._renderRound();
			this.infoItems.push(this.userInput);
			if (this.play && this.rounds) {
				this._renderInfoAll();
			}
		});
	}

	_getNumber() {
		const result = [];
		while (result.length < 4) {
			const rndNumber = this._randomize();
			if (!result.includes(rndNumber)) {
				result.push(rndNumber);
			}
		}
		return result;
	}

	_process() {
		if (this.play) {
			if (this.rounds) {
				const userVariant = document.querySelector("#select").value;
				this.play = this.check(this.goal, userVariant);
				this.play ? --this.rounds : this._renderFinish();
			} else {
				this.finishResult = 'lose'
				this._renderFinish();
				this.play = false;

			}
		}
	}

	check(riddle, userVariant) {
		let bulls = 0;
		let cows = 0;
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
			cows
		});
		return bulls === 4 ? false : true;
	}

	_renderRoundAll() {
		this.roundContainer.innerHTML = `
			<div class="round__wrapper">
					<div class="round__counter style" id="roundInfo">${this.rounds} round</div>
					<input class="round__select style" id="select" type="text" name="num">
					<button class="round__try style" id="try">Try</button>
				</div>
			`
	}

	_renderRound() {
		const roundWrapper = document.querySelector("#roundInfo");
		roundWrapper.innerText = `${this.rounds} round`;
	}

	_renderInfoAll() {
		const infoItem = this.infoItems.reduce((acc, item, index) => {
			let tryNumber = index;
			acc += this._renderInfo(tryNumber);
			return acc;
		}, '');
		this.resultContainer.innerHTML = infoItem;
	}

	_renderInfo(tryNumber) {
		let user = this.history[tryNumber].userVariant;
		let bulls = this.history[tryNumber].bulls;
		let cows = this.history[tryNumber].cows;
		return `
			<div class="result__wrap">
					<div class="result__history style"> User: ${user}</div>
					<div class="result__info style">${bulls} bull ${cows} cows </div>
				</div>
			`
	}

	_renderFinish() {
		let goal = [...this.goal];
		goal = goal.join('');
		this.finishContainer.innerHTML = `
			<div class=" finish__result style">You are ${this.finishResult}</br>It was ${goal}</div>
			`
	}


	_randomize() {
		return Math.floor(Math.random() * 10);
	}
};
