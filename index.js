// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { nextTick } = require('process');
// console.log(inquirer)
// console.log(fs)
// TODO: Create an array of questions for user input
var inputs = [];
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
    {
        type: 'input',
        message: "How do you install this",
        name: 'installation'
    },
    {
        type: 'input',
        message: "How do you use this",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Any outside contirbutions?",
        name: 'credits'
    },
    {
        type: 'input',
        message: "What license are you using for this project?",
        name: 'license'
    },
    {
        type: 'input',
        message: "Please give instructions to test the application",
        name: 'test_instruct'
    }
];
async function ask() {
    inquirer
        .prompt(questions)

        .then((response) => {//(response.repo_name) ?
            // for (var i = 0; i < response.length; i++) {
            //     console.log(response.[i])
            // }
            inputs.push(response)
            console.log(inputs)
        }

            // console.log(response.repo_name)
            // inputs.push(response.questions), //:
            //push all responses into an array?
            // await console.log(inputs)
            //const inputs = await inquirer.prompt(questions);
            // console.log("Your responses: ", inputs),
            // console.log("Thank you for your responses! Fetching your GitHub data next...")
        );
}
function next() {
    console.log(inputs)
}
//string in which we're appending data
// data = `${inputs[0]}/n ## Description /n ${inputs[1]}`
// console.log(reponse.description))
// console.log(questions)

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.appendFile(fileName,data)
// }

// TODO: Create a function to initialize app
async function init() {
    ask()
    var inputs = await ask()
    console.log(inputs)
}

// Function call to initialize app
// init();
ask()