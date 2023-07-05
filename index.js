// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const file = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.createPromptModule([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please describe the usages for this project.',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Please describe contribution guidelines.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please list test instructions.',
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  questions()
    .then((responses) => writeFile('index.html', generateHTML(responses)))
    .then(() => console.log('correct'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
