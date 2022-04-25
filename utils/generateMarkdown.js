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
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
# TITLE ${data.title}
# DESCRIPTION ${data.Description}
# TABLE OF CONTENTS ${data.TableOfContents}
# INSTALLATION ${data.Installation}
# USAGE ${data.Usage}
# LICENSE ${data.License}
# CONTRIBUTING ${data.Contributing}
# TESTS ${data.Tests}
# QUESTIONS ${data.Questions}`
}

module.exports = generateMarkdown;
