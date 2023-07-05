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
const writeToFile = ({ title, description, installation, usage, contributions, test }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header id="title">${title}</header>
        <section id="description">
            <h1> DESCRIPTION </h1>
            <p>${description}</p>
        </section>
        <section id="toc">
            <h1> TABLE OF CONTENTS </h1>
        </section>
        <section id="installation>
            <h1> INSTALLATION </h1>
            <p>${installation}</p>
        <section id="usage">
            <h1>USAGE</h1>
            <p>${usage}</p>
        </section>
        <section id="license">
            <h1>LICENSE</h1>
            <p></p>
        </section>
        <section id="contribute">
            <h1>CONTRIBUTING</h1>
            <p>${contributions}</p>
        </section>
        <section id="tests">
            <h1>TESTS</h1>
            <p>${test}</p>
        </section>
        <section id="question">
            <h1>QUESTIONS</h1>
            <p></p>
        </section>
    
</body>
</html>`;

// TODO: Create a function to initialize app
const initialize = () => {
  questions()
    .then((responses) => writeFile('index.html', generateHTML(responses)))
    .then(() => console.log('correct'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
initialize();
