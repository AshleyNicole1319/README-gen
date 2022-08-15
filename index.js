/*
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/

// Packages for the application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: "Enter your Github username: ",
            validate: usernameInput => {
                if(usernameInput){
                    return true;
                } else {
                    console.log('Please provide a Github username');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name:'title',
            message: 'What is your project title? (Required) ',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please provide a name for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project (Required),  use the following questions as guide \
            - What was your motivation? \
            - Why did you build this specific project? \
            - What problem does it solve? \
            - What did you learn? ',

            validate: descriptionInput => {
                if(descriptionInput){
                    return true;
                } else {
                    console.log('Please provide a description for your project')
                    return false;
                }
            }
        }
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation intructions for your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots if needed.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your e-mail address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your e-mail address.');
                    return false;
                }
            }
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();