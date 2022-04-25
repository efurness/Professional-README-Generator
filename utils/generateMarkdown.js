// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
    }
    return '';
    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This project is licensed under the ${license} license.`;
    }
    return '';
    
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# PROJECT TITLE \n ${data.title}
# TABLE OF CONTENTS \n ${data.TableOfContents}
1. [Project Description](#project-description)
2. [Installation Instructions](#installation)
3. [Usage Information](#usage)
4. [License](#license)
5. [Contributor Guidelines](#contributors)
6. [Test Instructions](#tests)
7. [Questions](#questions)
# DESCRIPTION \n ${data.Description}
# INSTALLATION \n ${data.Installation}
# USAGE \n ${data.Usage}
# LICENSE \n ${data.license}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
# CONTRIBUTING \n${data.Contributing}
# TESTS \n ${data.Tests}
# QUESTIONS \n ${data.Questions}
    
* For additional help or questions about collaboration, please reach out to ${data.email}
* Follow me on Github at [${data.github}](http://github.com/${data.github})`

}

module.exports = generateMarkdown;
