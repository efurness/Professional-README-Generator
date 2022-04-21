// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
        message: 'Title',
    },
            {
                type: 'input',
                name: 'Description',
                message: 'Description',
            },
            {
                type: 'input',
                name: 'Table of contents',
                message: 'Table of Contents',
            },
            {
                type: 'input',
                name: 'Installation',
                message: 'Installation',
            },
            {
                type: 'input',
                name: "Usage",
                message: 'Usage',
            },
            {
                type: 'input',
                name: 'License',
                message: 'License',
            },
            {
                type: 'input',
                name: 'Contributing',
                message: 'Contributing',
            },
            {
                type: 'input',
                name: 'Tests',
                message: 'Tests',
            },
            {
                type: 'input',
                name: 'Questions',
                message: 'Questions',
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


