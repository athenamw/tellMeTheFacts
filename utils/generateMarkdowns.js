// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const apacheBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
  const mitBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
  const artisticBadge = 'https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg';
  const gplBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';

  if (license == 'Gnu GPL v3') {
    return gplBadge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports.generateMarkdown = generateMarkdown;

// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)

// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
