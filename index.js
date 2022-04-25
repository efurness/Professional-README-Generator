// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// const axios = require("axios");
const markdown = require("./utils/generateMarkdown");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
    // const promptUser = () => {
    //     return inquirer.prompt([
        
    {
        type: 'input',
        name: 'title',
        message: 'Name your Project Title',
    },
    
    {
        type: 'input',
        name: 'TableOfContents',
        message: 'List your Table of Contents',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Give a brief description of your project',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Provide your installation instructions',
    },
    {
        type: 'input',
        name: "Usage",
        message: 'Describe your usage',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose your License',
        choices: ["MIT","Apache","ISC","Mozilla","GNU"]
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Add any contributing guidelines',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What tests were compiled?',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Your Questions',
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'Add your email address',
    },    
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
    },           
]


// TODO: Create a function to write README file
function writeToFile(file, data) {
    return fs.writeFileSync(path.join(process.cwd(),file ),data)
}


// TODO: Create a function to initialize app
function init () {
    inquirer.prompt(questions)
    .then((inquirerResponse) => {   
        console.log("Making ReadMe");
        writeToFile("ReadMe.md", generateMarkdown(inquirerResponse));
    })
    .catch((err) => {
        console.log(err);
    })
}


init();


