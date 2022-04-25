![GitHub license](https://img.shields.io/badge/license-undefined-blue.svg)
# PROJECT TITLE 
README GENERATOR
# TABLE OF CONTENTS 

1. [Project Description](#project-description)
2. [Installation Instructions](#installation)
3. [Usage Information](#usage)
4. [License](#license)
5. [Contributor Guidelines](#contributors)
6. [Test Instructions](#tests)
7. [Questions](#questions)

# DESCRIPTION 

This is a command line application running on NODE JS and takes user input to generate a README FILE.  The index.js contains the const variable with input questions containing input, message and name for the sections of the readme.  These questions are connected in the generateMarkdown.js file that uses a markdown function to feed the questions in the command line. The user is promted for questions about the project.  The results are printed into the Readme file.  The project was helpful to learn NODE JS and server-side application that allows developers to make readme's for their projects. 

# INSTALLATION 

NODE JS, INQUIRER, FS file system, MARKDOWN, PATH were used for this exercise.

# USAGE 
 
# LICENSE 

Open source license

# CONTRIBUTING 

SOLO PROJECT

# TESTS 

NO TESTS
 
# QUESTIONS 

My challenges for this project was to get the license functions to work.  The problem was figured out: the spelling of license used a  capitol L in the index.js file and the license functions in generateMarkdown.js were all lower case so the license in the README was undefined, and so now everything works.


* For additional help or questions about collaboration, please reach out to elasfern@gmail.com
* Follow me on Github at [efurness](http://github.com/efurness)