const Employee = require('./Employee');

class Manager extends Employee {
    constructor(managerName, managerId, managerOffice, managerEmail) {
        super(managerName, managerId, managerEmail );
        this.managerOffice = managerOffice;
    }
    getOfficeNumber() {
        return this.managerOffice;
    }
    getRole() {
       return 'Manager';
   }
}

module.exports = Manager;