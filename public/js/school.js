export class School {
    constructor(name) {
        this.name = name;
        this.membersList = [];
    }

    addMember(student) {
        this.membersList.push(student);
    }

    getStudent(fullName) {
        return this.membersList.find(member => member.fullName === fullName && member.type === 'student');
    }

    removeStudent(fullName) {
        if (this.getStudent(fullName)) {
            this.membersList = this.membersList.filter(member => member.fullName !== fullName);
        }
    }

    appendToDom(renderPoint) {
        this.membersList.forEach(member => {
            member.appendToDom(renderPoint);
        });
    }
}