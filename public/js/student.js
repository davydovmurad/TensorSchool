import { Person } from './person.js';

export class Student extends Person {
    constructor(params) {
        super(params);
        this.type = 'student';
        this.course = params.course;
    }

    render() {
        return `
            <div class="member">
                <img class="member__img" src="${this.photoUrl}" alt="${this.fullName}" title="${this.fullName}">
                <p class="member__fullname">${this.fullName}</p>
                <span>${this.university} ${this.course}</span>
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
                        <p class="member__info-university">
                            <span class="member__info-subtext">Учится</span>
                            ${this.university}, ${this.course} курс
                        </p>
                    </div>
                    <img class="member__info-img" src="${this.photoUrl}" alt="${this.fullName}" title="${this.fullName}">
                </div>
            </div>
        `;
    }
}