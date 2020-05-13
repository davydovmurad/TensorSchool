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

class Person {
    constructor(params) {
        this.fullName = params.fullName;
        this.birthDate = params.birthDate;
        this.university = params.university;
        this.photoUrl = params.photoUrl;
    }
}

class Teacher extends Person {
    constructor(params) {
        super(params);
        this.type = 'teacher';
    }
}

class Student extends Person {
    constructor(params) {
        super(params);
        this.type = 'student';
        this.course = params.course;
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

    appendToDOM() {
        document.querySelector('#members').insertAdjacentHTML('beforeend', this.render());
    }
}

class PersonFactory {
    createStudent(params) {
        return new Student(params);
    }

    createTeacher(params) {
        return new Teacher(params);
    }

    createPerson(params) {
        return new Person(params);
    }

    create(params, type) {
        switch (type) {
            case 'student':
                return this.createStudent(params);
            case 'teacher':
                return this.createTeacher(params);
            default:
                return this.createPerson(params);
        }
    }
}

class School {
    constructor(name) {
        this.name = name;
        this.studentsList = [];
        this.teachersList = [];
    }

    addStudent(student) {
        this.studentsList.push(student);
    }

    addTeacher(teacher) {
        this.teachersList.push(teacher);
    }

    getStudent(fullName) {
        this.studentsList.find(student => student.fullName === fullName);
    }

    removeStudent(fullName) {
        this.studentsList.filter(student => student.fullName !== fullName);
    }
}

function openCard(e) {
    if (e.target.closest('.member__img')) {
        const memberBlock = e.target.parentNode;
        let infoBlock = memberBlock.querySelector('.member__info');
        infoBlock.style.display = 'flex';
    }
}

function closeCard(e) {
    if (e.target.closest('.member__info-close-btn')) {
        let infoBlock = e.target.closest('.member__info');
        infoBlock.style.display = 'none';
    }
}

const personFactory = new PersonFactory();
const school = new School('Школа №1')

const studentsList = [
    personFactory.create(
        {
            fullName: 'Миша Иванов',
            birthDate: new Date(2000, 0, 1),
            university: 'УГАТУ',
            course: 2,
            photoUrl: './img/ava01.jpg'
        }, 'student'
    ),
    personFactory.create(
        {
            fullName: 'Маша Иванова',
            birthDate: new Date(2001, 10, 12),
            university: 'БФУ',
            course: 1,
            photoUrl: './img/ava02.jpg'
        }, 'student'
    ),
    personFactory.create(
        {
            fullName: 'Анна Петрова',
            birthDate: new Date(2001, 4, 17),
            university: 'КГТУ',
            course: 3,
            photoUrl: './img/ava03.jpg'
        }, 'student'
    ),
    personFactory.create(
        {
            fullName: 'Иван Свиридов',
            birthDate: new Date(1995, 5, 26),
            university: 'БФУ',
            course: 4,
            photoUrl: './img/ava04.jpg'
        }, 'student'
    ),
    personFactory.create(
        {
            fullName: 'Екатерина Сидорова',
            birthDate: new Date(1995, 7, 20),
            university: 'КГТУ',
            course: 4,
            photoUrl: './img/ava05.jpg'
        }, 'student'
    ),
    personFactory.create(
        {
            fullName: 'Виктор Петров',
            birthDate: new Date(2000, 6, 6),
            university: 'УГАТУ',
            course: 1,
            photoUrl: './img/ava06.jpg'
        }, 'student'
    )
]

studentsList.forEach((item) => {
    item.appendToDOM();
    school.addStudent(item);
});

document.querySelector('#members').addEventListener('click', (e) => {
    openCard(e);
    closeCard(e);
});