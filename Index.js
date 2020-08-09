const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generatePage = require('./src/page-template.js');

const inquirer = require('inquirer');

const fs = require('fs');

const team = [];


// Employee:
// - name
// -id
// -email
// -getName()
// -getId()
// -getEmail()
// -getRole() // Returns 'Employee'

// Manager:
// -name
// -id
// -office number
// -email
// -getName()
// -getId()
// -getEmail()
// -getRole() // Overridden to return 'Manager'

// Engineer:
// - name
// -id
// -email
// -github //Github Username
// -getName()
// -getId()
// -getEmail()
// -getGithub()
// -getRole() // Overriden to return 'Engineer'

// Intern:
// - name
// -id
// -email
// -school
// -getName()
// -getId()
// -getEmail()
// -getSchool()
// -getRole() // Overriden to return 'Intern'

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the Manager? (Required)',
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter a name for the Manager');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the manager's employee ID? (Required)",
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log("Please enter the manager's employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is the manager's office number? (Required)",
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter an office number');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'managerEmail',
            messsage: "What is the manager's email? (Required)",
            validate: answer => {
                let passAnswer = answer.match(/\S+@\S+\.\S+/);
                if (passAnswer) {
                    return true;
                } else {
                    console.log('Please enter a valid email address');
                    return false;
                }

            }
        }
    ])

    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerOffice, answers.managerEmail);
        team.push(manager);
        addTeam();
    })
};

function addTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamMember',
            message: 'Would you like to add another member to your team?',
            choices: ['Engineer', 'Intern', 'No Thanks!']

        }
    ])
    .then(chosen => {
        switch (chosen.teamMember) {
            case 'Engineer': 
            addEngineer();
            break;
            case 'Intern': 
            addIntern();
            break;
            case 'No Thanks!': 
            generateTeam();
            break;
        }
    })
};

function generateTeam() {

}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of the Engineer? (Required)',
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter a name for the Engineer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the Engineer's employee ID? (Required)",
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            messsage: "What is the Engineer's email? (Required)",
            validate: answer => {
                let passAnswer = answer.match(/\S+@\S+\.\S+/);
                if (passAnswer) {
                    return true;
                } else {
                    console.log('Please enter a valid email address');
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'engineerGit',
            message: "What is the Engineer's GitHub username? (Required)",
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter a GiHub username');
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGit);
        team.push(engineer);
        addTeam();
    })
};

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of the Intern? (Required)',
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter a name for the Intern');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'internEmail',
            messsage: "What is the Intern's email? (Required)",
            validate: answer => {
                let passAnswer = answer.match(/\S+@\S+\.\S+/);
                if (passAnswer) {
                    return true;
                } else {
                    console.log('Please enter a valid email address');
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the Intern's school? (Required)",
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter a school name');
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.internName, answers.internEmail, answers.internSchool);
        team.push(intern);
        addTeam();
    })
};

addManager();