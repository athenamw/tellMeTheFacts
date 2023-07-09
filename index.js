// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const file = require('fs').promises;

// TODO: Create an array of questions for user input

const questions = () => {
  return inquirer.prompt([
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
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Tell Me The Facts</title>
</head>
<body>
    <header id="title" class="text-7xl text-center">${title}</header>
        <section id="description" class="content-between">
            <h1 class="text-4xl"> DESCRIPTION </h1>
            <p>${description}</p>
        </section>
        <section id="toc">
            <h1 class="text-4xl"> TABLE OF CONTENTS </h1>
            <ol>
            <li><a href="#description">Description</a></li>
            <li>Installation</li>
            <li>Usage</li>
            <li>License</li>
            <li>Contributing</li>
            <li>Tests</li>
            <li>Questions</li>
            </ol>
        </section>
        <section id="installation">
            <h1 class="text-4xl"> INSTALLATION </h1>
            <p>${installation}</p>
        <section id="usage">
            <h1 class="text-4xl">USAGE</h1>
            <p>${usage}</p>
        </section>
        <section id="license">
            <h1 class="text-4xl">LICENSE</h1>
            <p></p>
        </section>
        <section id="contribute">
            <h1 class="text-4xl">CONTRIBUTING</h1>
            <p>${contributions}</p>
        </section>
        <section id="tests">
            <h1 class="text-4xl">TESTS</h1>
            <p>${test}</p>
        </section>
        <section id="question">
            <h1 class="text-4xl">QUESTIONS</h1>
            <p></p>
        </section>
    
</body>
</html>`;

// TODO: Create a function to initialize app
const initialize = () => {
  questions()
    .then((responses) => file.writeFile('index.html', writeToFile(responses)))
    .then(() => console.log('correct'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
initialize();
