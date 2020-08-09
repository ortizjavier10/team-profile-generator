const Employee = require('./Employee');

class Intern extends Employee {
    constructor(internName, internEmail, internSchool) {
        super(internName, internEmail, internSchool);
        this.insternSchool = internSchool
    }
    getSchool() {
        return this.internSchool;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;