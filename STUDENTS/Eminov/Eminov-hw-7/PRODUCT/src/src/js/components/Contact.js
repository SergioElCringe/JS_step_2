const url = '/api/contact';

export default class Contact {
    constructor(api) {
        this.inputName = null;
        this.inputSurname = null;
        this.inputSubject = null;
        this.inputMessage = null;
        this.submit = null;
        this.request = api;
        this._init()
    }

    _init() {
        this.submit = document.querySelector('.contact_button');
        if (this.submit) {
            this.submit.addEventListener('click', this._handleEvents.bind(this));
        };
    }

    async _handleEvents(evt) {
        this._initInputs();
        if (evt.target.classList.contains('contact_button')) {
            await this._sendForm();
        }
    }

    _initInputs() {
        this.inputName = document.querySelector('#contact_name').value;
        this.inputSurname = document.querySelector('#contact_last_name').value;
        this.inputSubject = document.querySelector('#contact_company').value;
        this.inputMessage = document.querySelector('#contact_textarea').value;
        console.log(this.inputName)
    }

    _prepareForm() {
        const { inputName, inputSurname, inputSubject, inputMessage } = this;
        return {
            name: inputName,
            surname: inputSurname,
            subject: inputSubject,
            message: inputMessage
        };
    }

    async _sendForm() {
        const form = this._prepareForm();
        console.log(form)
        try {
            const data = await this.request.send(url, 'POST', form);

            if (!data.error) {
                console.log('cool');
            } else {
                console.log('all bad');
            };
        } catch (err) {
            console.warn(err);
        };
    }
}