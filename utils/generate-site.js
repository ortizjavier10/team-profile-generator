const Employee = require("../lib/Employee");

function generatePage(team) {


    function generateManager(manager) {
        return `
        <div class="container row col-12">
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">${manager.getName()}<br><i class="fa fa-coffee"></i> ${manager.getRole()}</div>
            <div class="card-body">
            <h5 class="card-title"></h5>
            <ul>
                <li>ID: ${manager.getId()}</li>
                <li>Office number:${manager.getOfficeNumber()}</li>
                <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            </ul>    
            </div>
        </div>
        `
    };

    function generateEngineer(engineer) {
        return `
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineer.getName()}<br><i class="fa fa-database"></i> ${engineer.getRole()}</div>
        <div class="card-body">
        <h5 class="card-title"></h5>
        <ul>
            <li>ID: ${engineer.getId()}</li>
            <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li>GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>    
        </div>
    </div>
        `
    };

    function generateIntern(intern) {
        return `
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">${intern.getName()}<br><i class="fa fa-graduation-cap"></i> ${intern.getRole()}</div>
            <div class="card-body">
            <h5 class="card-title"></h5>
            <ul>
                <li>ID: ${intern.getId()}</li>
                <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li>School: ${intern.getSchool()}</li>
            </ul>    
            </div>
        </div>
        `
    };


const html = [];
html.push(team
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManager(manager))
    );
html.push(team
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer))
    .join('')
    );
html.push(team
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateIntern(intern))
    .join('')
    );
return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../src/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
    <div class="container">
        <div class="row">
            <div class="col-12 text-white bg-dark">
                <h1 class="title">My Team</h1>
            </div>  
        </div>
    </div>    
    </header>
    <div class="container row col-12">
        ${generatePage(team)}
    </div>
</body>
</html>
    `
}

// module.exports = generatePage;
