// including require & fs
const inquirer = require('inquirer')
const fs = require('fs')
// set constants that go into form
// use inquirer prompts to gather info
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username',
    }, {
        type: 'input',
        message: 'Where are you located?',
        name: 'loc',
    }, {
        type: 'input',
        message: 'Tell me a little about yourself.',
        name: 'bio',
    }, {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'linkedin',
    }, {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'github',
    }
])
    .then((answers) => {// then statement to write file of answers
        console.log("success")
        const filename = `${answers.username}.html`;
        //set up const for syntax used
        const USERNAME = answers.username
        const LOCATION = answers.loc
        const BIO = answers.bio
        const LINKEDIN = answers.linkedin
        const GITHUB = answers.github
        // console.log(USERNAME, LOCATION, BIO, LINKEDIN, GITHUB)
        const html =
            // html template
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>${USERNAME}</h1>
                <h2>${LOCATION}</h2>
                <h2>${BIO}</h2>
                <a href="${LINKEDIN}">${LINKEDIN}</a>
                <a href="${GITHUB}">${GITHUB}</a>
            </body>
            </html>
        `
        fs.writeFile(filename, JSON.stringify(html, null), (err) =>
            err ? console.log(err) : console.log("success x2")
        )
    })