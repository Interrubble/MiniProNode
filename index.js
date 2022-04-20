// including require & fs
const inquirer = require('inquirer')
const fs = require('fs')
// set constants that go into form
// use inquirer prompts to gather info
inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your name?',
    }, {
        type: 'input',
        name: 'loc',
        message: 'Where are you located?',
    }, {
        type: 'input',
        name: 'bio',
        message: 'Tell me a little about yourself.',
    }, {
        type: 'input',
        name: 'linkedin',
        message: 'What is your LinkedIn URL?',
    }, {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub URL?',
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
                <script src="./style.css"></script>
            </head>
            <body>
                <h1>User Info</h1>
                <section>
                    <div class="card">
                        <p>Hello! My name is <strong>${USERNAME}</strong>. I currently live in <strong>${LOCATION}</strong>.</p>
                        <p>${BIO}</p>
                        <p>If you'd like to see some of my work, my LinkedIn profile is <a href="${LINKEDIN}">${LINKEDIN}</a>, and my GitHub is <a href="${GITHUB}">${GITHUB}</a>.</p>
                    </div>
                </section>
                
            </body>
            </html>
        `
        fs.writeFile(filename, html, (err) =>
            err ? console.log(err) : console.log("success x2")
        )
    })