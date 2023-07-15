// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Gnu GPL v3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == 'apache-2.0') {
    return `[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == 'artistic-2.0') {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
  } else if (license.length === 0) {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Gnu GPL v3') {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license == 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  } else if (license == 'apache-2.0') {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license == 'artistic-2.0') {
    return `https://opensource.org/licenses/Artistic-2.0`;
  } else if (license.length === 0) {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length === 0) {
    return '';
  } else {
    return `
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contribute)
  6. [Tests](#tests)
  7. [Questions](#question)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.title} uses a ${data.license} license. Please review information about this [here](${renderLicenseLink(data.license)}).

  ## Contributing

  ${data.contributions}

  ## Tests
  ${data.test}

  ## Questions

  With questions please contact me at:
  GitHub: [${data.username}](${data.profileLink})
  [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
