import { PersonFactory } from './personLib.js';
import { School } from './school.js';

// проинициализируем фабрику
const factory = new PersonFactory();

// создадим школу (если есть для нее фабрика, то тоже через фабрику) 
let school = new School('Школа №1');

// добавим в список школы студентов используйте те данные, которые у вас есть
// Vasia и пр. тут скорее для примера
// если методы называются по другому, поменяйте
// по желанию можно добавить больше
const membersList = [
    {
        fullName: 'Миша Иванов',
        birthDate: new Date(2000, 0, 1),
        university: 'УГАТУ',
        course: 2,
        photoUrl: './img/ava01.jpg'
    },
    {
        fullName: 'Маша Иванова',
        birthDate: new Date(2001, 10, 12),
        university: 'БФУ',
        course: 1,
        photoUrl: './img/ava02.jpg'
    },
    {
        fullName: 'Анна Петрова',
        birthDate: new Date(2001, 4, 17),
        university: 'КГТУ',
        course: 3,
        photoUrl: './img/ava03.jpg'
    },
    {
        fullName: 'Иван Свиридов',
        birthDate: new Date(1984, 5, 26),
        university: 'БФУ',
        photoUrl: './img/ava04.jpg'
    },
    {
        fullName: 'Екатерина Сидорова',
        birthDate: new Date(1985, 7, 20),
        university: 'КГТУ',
        photoUrl: './img/ava05.jpg'
    },
    {
        fullName: 'Виктор Петров',
        birthDate: new Date(1960, 6, 6),
        university: 'БФУ',
        photoUrl: './img/ava06.jpg'
    }
];

school.addMember(factory.createStudent(membersList[0]));
school.addMember(factory.createStudent(membersList[1]));
school.addMember(factory.createStudent(membersList[2]));
school.addMember(factory.createTeacher(membersList[3]));
school.addMember(factory.createTeacher(membersList[4]));
school.addMember(factory.createTeacher(membersList[5]));

// отрисуем всех студентов в dom 
// если методы называются по другому, поменяйте
// точка монтирования document.body может быть изменена на любой другой элемент DOM
school.appendToDom('#members');

// в итоге в на странице должны получить список студентов и учителей
// папка js будет содержать несколько файлов, минимум 3, а лучше больше
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

document.querySelector('#members').addEventListener('click', (e) => {
    openCard(e);
    closeCard(e);
});