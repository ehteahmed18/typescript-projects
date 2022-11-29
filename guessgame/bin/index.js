#! /usr/bin/env node
import inquirer from "inquirer";
async function UserInput() {
    let RanNum = Math.floor(Math.random() * 10);
    let ans = await inquirer.prompt([
        {
            type: "number",
            name: "user",
            message: "Please enter a number from 0-10: \n"
        }
    ]);
    if (ans.user === RanNum) {
        console.log(`Number selected by computer: ${RanNum}`);
        console.log(`\nNumber guessed by you: ${ans.user}`);
        console.log("\nHurray!!! You won..)");
    }
    else {
        console.log(`Number selected by computer: ${RanNum}`);
        console.log(`\nNumber guessed by you: ${ans.user}`);
        console.log("\nAlas!! You lose.. Better luck next time");
    }
}
async function DoAgain() {
    do {
        await UserInput();
        var again = await inquirer.prompt([
            {
                type: "string",
                name: "try",
                message: "Do you waanna try again (y/n)? "
            }
        ]);
    } while (again.try === 'y' || again.try === 'Y');
}
DoAgain();
