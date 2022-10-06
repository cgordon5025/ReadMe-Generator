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

// async function ask() {
//     inquirer
//         .prompt(questions)

//         .then((response) => {//(response.repo_name) ?
//             // for (var i = 0; i < response.length; i++) {
//             //     console.log(response.[i])
//             // }
//             inputs.push(response)
//             console.log(inputs)
//         }

//             // console.log(response.repo_name)
//             // inputs.push(response.questions), //:
//             //push all responses into an array?
//             // await console.log(inputs)
//             //const inputs = await inquirer.prompt(questions);
//             // console.log("Your responses: ", inputs),
//             // console.log("Thank you for your responses! Fetching your GitHub data next...")
//         );
// }
// function next() {
//     console.log(inputs)
// }
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
    const userResp = await inquirer.prompt(questions)
    console.log(userResp)
    await markDown(userResp)
    await writeToFile("README.md", markDown(userResp))
    // renderLicenseBadge(userResp.license)
    // //move this to markdown.js
    // await fs.appendFile("README.md", `${licenseID} \n\n ${userResp.repo_name} \n\n ## Description \n ${userResp.description} \n\n Table of Contents \nInstallation\n Usage\n Credits\n Licenses\n Tests\n\n ## Installation \n ${userResp.install}\n\n ## Usage\n${userResp.usage}\n\n ##Credits\n${userResp.credits}\n\n ## License \n This is covered under the ${userResp.license} license \n\n ##Test Instructions \n${userResp.test_instruct} \n\n ## Questions \n${githubLink} \n`, (err) =>
    //     err ? console.error(err) : console.log('Commit logged!'))
}

// Function call to initialize app
init();

// //better syntax
// fs.appendFile("README.md",generateMarkdown, (err) =>
// err ? console.error(err) : console.log('Commit logged!'))