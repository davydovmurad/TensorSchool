const month = {
    0: 'января',
    1: 'февраля',
    2: 'марта',
    3: 'апреля',
    4: 'мая',
    5: 'июня',
    6: 'июля',
    7: 'августа',
    8: 'сентября',
    9: 'октября',
    10: 'ноября',
    11: 'декабря'
}

export class Person {
    constructor(params) {
        this.fullName = params.fullName;
        this.birthDate = params.birthDate;
        this.university = params.university;
        this.photoUrl = params.photoUrl;
    }

    get birthDateStr() {
        return `${this.birthDate.getDate()} ${month[this.birthDate.getMonth()]}, 
                ${Math.round((Date.now() - this.birthDate) / (1000 * 3600 * 24 * 365))} лет`;
    }

    render() {
        return `
            <div class="member">
                <img class="member__img" src="${this.photoUrl}" alt="${this.fullName}" title="${this.fullName}">
                <p class="member__fullname">${this.fullName}</p>
                <span>${this.university}</span>
                <div class="member__info">
                    <div class="member__info-close">
                        <button class="member__info-close-btn">x</button>
                    </div>
                    <div class="member__info-text">
                        <p class="member__info-name">${this.fullName}</p>
                        <p class="member__info-birthdate">
                            <span class="member__info-subtext">День рождения</span>
                            ${this.birthDateStr}
                        </p>
                    </div>
                    <img class="member__info-img" src="${this.photoUrl}" alt="${this.fullName}" title="${this.fullName}">
                </div>
            </div>
        `;
    }

    appendToDom(renderPoint) {
        document.querySelector(renderPoint).insertAdjacentHTML('beforeend', this.render());
    }
}