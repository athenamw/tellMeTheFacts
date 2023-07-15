// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const file = require('fs');
const generateMarkdown = require('./utils/generateMarkdowns');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter a valid title for your project');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project.',
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a valid description for your project');
        return false;
      }
    },
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
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license type.',
    choices: [, 'Gnu GPL v3', 'MIT', 'apache-2.0', 'artistic-2.0'],
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
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  { type: 'input', name: 'profileLink', message: 'What is your GitHub profile link?' },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter an email address.',
  },
];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
  file.writeFile('./dist/README.md', generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('Your file has been created successfully!');
  });
}

// TODO: Create a function to initialize app
function initialize() {
  inquirer.prompt(questions).then(function (answer) {
    const fileName = answer.title.split(' ').join('') + '.md';

    writeFile(fileName.answer, answer);
  });
}

// Function call to initialize app
initialize();
