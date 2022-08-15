// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let renderLicenseBadge = license => {
  if (license == 'Apache 2.0') {
    return `https://img.shields.io/badge/License-Apache_2.0-yellowgreen`;
  } else if (license == 'GNU GPL v3') {
    return `https://img.shields.io/badge/License-GPLv3-blue`;
  } else if (license == 'MIT') {
    return `https://img.shields.io/badge/License-MIT-yellow`;
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let renderLicenseLink = license => {
  if (license == 'Apache 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license == 'GNU GPL v3') {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license == 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  [![License: ${data.license}](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## License
  ${data.license}
`;
};

module.exports = generateMarkdown;
