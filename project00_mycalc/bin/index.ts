#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation, { rainbow } from "chalk-animation";
import Choices from "inquirer/lib/objects/choices.js";
import Choice from "inquirer/lib/objects/choice.js";
import { type } from "os";

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    })
}

async function welcome() {
    let Title = chalkAnimation.rainbow("---Let's Start Calculation---");
    await sleep();
    Title.stop();

    console.log(chalk.blue(` _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`));
    // DoAgain();
}

await welcome();

async function askQuestion() {
    await inquirer.prompt([
        /* Pass your questions in here */
        {
            type: 'list',
            name: 'operator',
            message: 'What operation you want to do ?',
            choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division"]
        },
        {
            type: 'number',
            name: 'num1',
            message: "Enter number 1: "
        },
        {
            type: 'number',
            name: 'num2',
            message: "Enter number 2: "
        }
    ])
        .then((answers) => {
            if (answers.operator === '+ Addition') {
                let c = answers.num1 + answers.num2;
                console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${c}`));
            }
            else if (answers.operator === '- Subtraction') {
                let c = answers.num1 - answers.num2;
                console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${c}`));
            }
            else if (answers.operator === '* Multiplication') {
                let c = answers.num1 * answers.num2;
                console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${c}`));
            }
            else if (answers.operator === '/ Division') {
                let c = answers.num1 / answers.num2;
                console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${c}`));
            }
        });
}

async function DoAgain() {
    do {
        await askQuestion();
        var again = await inquirer
        .prompt([
            {
                type: "input",
                name: 'asking',
                message: "Do you want to Calculate Again (y/n): ",
            }
        ])
            // .then((again) => {
            //     askQuestion();
            // })

    } while (again.asking === "y" || again.asking === "Y" || again.asking === "yes" || again.asking === "YES")
}

DoAgain();