// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// console.log(inquirer)
// console.log(fs)
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the repository',
        name: 'repo_name'
    },
    {
        type: 'input',
        message: "Give a quick description of the project",
        name: 'description'
    },
];
inquirer
    .prompt(questions)
    
    .then((response) => //(response.repo_name) ?
        console.log(response.repo_name) //:
        //push all responses into an array?
       // console.log('ooops')
    );

// console.log(reponse.description))
// console.log(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile("ReadME",)
 }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
