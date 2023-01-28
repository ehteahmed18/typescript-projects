#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let counter = 0;
let username;
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function Score() {
    let score = (counter / 5) * 100;
    if (score > 70) {
        console.log(chalk.greenBright(`Congratulations ${username}! You passed the quiz. Your score is ${score}%\n`));
    }
    else {
        console.log(chalk.redBright(`Alas ${username}! You failed the quiz. Your score is ${score}%\n`));
    }
}
async function questions() {
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "name1",
            message: "\nWhat are block scoped variables in JavaScript?",
            choices: ["The variables cannot be accessed outside the function in which they are declared.", "The variables can be used globally.", "The variable is only accessible inside the block(if-else/for block) inside which it is declared", "Both a and c"]
        }
    ]);
    if (answer.name1 === "The variable is only accessible inside the block(if-else/for block) inside which it is declared") {
        console.log("\nCorrect answer\n");
        counter = counter + 1;
    }
    else {
        console.log("\nWrong answer\n");
        counter = counter;
    }
    let answer1 = await inquirer.prompt([
        {
            type: "list",
            name: "name",
            message: "\nWhich of the following is an array method?",
            choices: ["Map", "Filter", "Reduce", "All of these"]
        }
    ]);
    if (answer1.name === "All of these") {
        console.log("\nCorrect answer\n");
        counter = counter + 1;
    }
    else {
        console.log("\nWrong answer\n");
        counter = counter;
    }
    let answer2 = await inquirer.prompt([
        {
            type: "list",
            name: "name",
            message: "\nWhich of the following is considered a first class citizen in JavaScript?",
            choices: ["Function", "Class", "Array", "Object"]
        }
    ]);
    if (answer2.name === "Function") {
        console.log("\nCorrect answer\n");
        counter = counter + 1;
    }
    else {
        console.log("\nWrong answer\n");
        counter = counter;
    }
    let answer3 = await inquirer.prompt([
        {
            type: 'list',
            name: 'name',
            message: "\nWhich is the correct way to bind an object to the current method?",
            choices: ["Func = func.bind(this)", "Let func = () => {}", "Both a and b", "None of these"]
        }
    ]);
    if (answer3.name === "Both a and b") {
        console.log("\nCorrect answer\n");
        counter = counter + 1;
    }
    else {
        console.log("\nWrong answer\n");
        counter = counter;
    }
    let answer4 = await inquirer.prompt([
        {
            type: "list",
            name: "name",
            message: "\nWhich method is used to convert the JSON string to a JSON object?",
            choices: ["JSON.parse(string)", "JSON.convertToObject(string)", "JSON.object(string)", "None of these"]
        }
    ]);
    if (answer4.name === "JSON.parse(string)") {
        console.log("\nCorrect answer\n");
        counter = counter + 1;
    }
    else {
        console.log("\nWrong answer\n");
        counter = counter;
    }
}
async function welcome() {
    let Title = chalkAnimation.rainbow("\n------JAVASCRIPT QUIZ------\n");
    await sleep();
    Title.stop();
    console.log("You will be asked 5 questions.\nEach question carry equal marks.\nIf you score less than 70% you will fail the quiz.");
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "\nPlease enter your name: "
        },
    ]);
    username = answer.name;
    await questions();
    await Score();
}
async function DoAgain() {
    do {
        await welcome();
        var again = await inquirer
            .prompt([
            {
                type: "input",
                name: 'asking',
                message: "Do you want to Play Again (y/n): ",
            }
        ]);
    } while (again.asking === "y" || again.asking === "Y" || again.asking === "yes" || again.asking === "YES");
}
DoAgain();
