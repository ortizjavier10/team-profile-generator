const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(engineerName, engineerId, engineerEmail, engineerGit) {
        super(engineerName, engineerId, engineerEmail);
        this.engineerGit = engineerGit;
    }
    getGithub() {
        return this.engineerGit;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;