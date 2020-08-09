const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email, school);
        this.school = school
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;