// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown')
// console.log(inquirer)
// console.log(fs)
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the repository?',
        name: 'repo_name'
    },
    {
        type: 'input',
        message: "Give a quick description of the project",
        name: 'description'
    },
    {
        type: 'input',
        message: "How do you install the application?",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Explain the usage of the application",
        name: 'usage'
    },
    {
        type: 'input',
        message: "What are the contribution guidelines for the repository?",
        name: 'credits'
    },
    {
        type: 'list',
        message: "What license are you using for this project?",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified License", "BSD 3-Clause 'New' or'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "Mozilla Public License v2.1", "The Unilicense", "No License"],
        name: 'license'
    },
    {
        type: 'input',
        message: "Please give instructions to test the application",
        name: 'test_instruct'
    },
    {
        type: 'input',
        message: 'If you would like to include your GitHub please enter your username',
        name: 'github'
    },
    {
        type: 'input',
        message: 'If you would like to include your email please enter your email address',
        name: 'email'
    }
];

function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Commit logged!'))
}

// TODO: Create a function to initialize app
async function init() {
    const userResp = await inquirer.prompt(questions)
    console.log(userResp)
    // await markDown(userResp)
    await writeToFile("sample.md", markDown(userResp), (err) =>
        err ? console.error(err) : console.log('Commit logged!'))

}

// Function call to initialize app
init();