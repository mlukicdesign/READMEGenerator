// TODO: Include packages needed for this application
// const fs = require("fs");
const inquirer = require("inquirer");
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'projectLink',
    message: 'Provide the link to your deployed application',
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your poject?',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Use full stops to add a return and number to your list.'
},
{
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles. Include any third-party assets that require attribution.'
},
{
    type: 'input',
    name: 'testing',
    message: 'Provide instructions on how to run tests on your application',
},
{
    type: 'list',
    name: 'license',
    message: 'Please provide a license for your application',
    choices: [
        {name: "MIT License", value: "[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)"},
        {name: "Apache License", value: "[![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"},
        {name: "Creative Commons Attribution Internal License", value: "[![Creative Commons License](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)"},
    ],
},
{
    type: 'input',
    name: 'email',
    message: 'Please provide your email address',
},
{
    type: 'input',
    name: 'github',
    message: 'Please provide a link to your Github Profile',
},
]);
};

// TODO: Create a function to write README file
const writeToFile = ({title, description, license, installation, usage, credits, testing, contact, github, projectLink}) => 
 `
 # ${title}

 ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Test Instructions](#testing)
- [Contact](#contact)

 
 ## Project Link
---
${projectLink}
<br>
<br>
 ## Description 
 ---
 ${description}
 ### Application License:
 ${license}

 <br>
 <br>
 ## Installation
 ---
 ${installation}
 <br>
 <br>
 ## Usage
 ---
 ${usage}
 <br>   
 <br>
 ## Credits
 ---
 ${credits}
 <br>
 <br>
 ## Testing
 ---
 ${testing}
 <br>
 <br>
 ## Contact
 ---
 Please feel free to reach out with any questions regarding this project via the details below:
 <br>
 ${contact} <br>
 ${github} 
`




// Use writeFileSync as a promise
const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('README.md', writeToFile(answers)))
      .then(() => console.log('Successfully wrote README'))
      .catch((err) => console.error(err));
  };


// Function call to initialize app
init();
