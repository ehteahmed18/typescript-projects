#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let amount: number;
var name: string;
var pin: number;

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    })
};


async function welcome() {
    let Title = (chalkAnimation.neon("====WELCOME TO XYZ BANK'S ATM MACHINE===="));
    await sleep();
    Title.stop();
    var ask = await inquirer.prompt([
        {
            type: "string",
            name: "user",
            message: "Please enter Account holder name: "
        },
        {
            type: "password",
            name: "pin",
            message: "Please enter your 4 digit pin: "
        }
    ]);
    if (ask.pin.length != 4) {
        console.log("Wrong password!! Please enter account holder name and password again.");
        await welcome();
        name = ask.user;
    }
    name = ask.user;
};


async function balance() {
    console.log(chalk.yellowBright(`\n\n          XYZ BANK          \n--------------------------------\n     Balance Receipt\n-------------------------------- \n     Account holder name: ${name}\n--------------------------------\n     Available Balance: $${amount} \n`)
    )
}
async function withdraw() {
    var WDAmount = await inquirer.prompt([
        {
            type: 'number',
            name: 'WDA',
            message: 'Select a amount to withdraw: ',
            // choices: [1000,2500,5000,7500]
        },
        {
            type: 'input',
            name: "receiptwd",
            message: "Do you want receipt (y/n)? "
        }
    ]);
    if (WDAmount.WDA <= amount) {
        amount = amount - WDAmount.WDA;
        if (WDAmount.receiptwd === "y" || WDAmount.receiptwd === "Y") {
            console.log(chalk.yellowBright(`\n\n          XYZ BANK          \n--------------------------------\n     With Drawal Receipt\n-------------------------------- \n     Account holder name: ${name}\n--------------------------------\n     Amount Withdraw: $${WDAmount.WDA}\n--------------------------------\n     Available Balance: $${amount} \n`)
            )
        }
        else {
            console.log(`\nAmount Withdrawn: $${WDAmount.WDA} \nAvailable Balance: $${amount}\n`);
        }
    }
    else {
        console.log(chalk.blueBright(`\nOperation Failed!!! \n\nInsufficient Balance\nAvailable Balance: $${amount}\n`));
    }
};

async function Operation() {
    var asking = await inquirer.prompt([
        {
            type: 'list',
            name: "any",
            message: "Select operation you want to perform? \n",
            choices: ["Balance", "Withdraw"]
        }
    ])
    if (asking.any === "Balance") {
        await balance();
    }
    else if (asking.any === "Withdraw") {
        await withdraw();
    }
};
async function ATM() {
    await welcome();
    amount = Math.floor(Math.random() * 10000);
    do {
        await Operation();
        var again = await inquirer.prompt([
            {
                type: "string",
                name: "try",
                message: "Do you want to continue using ATM ? (y/n)? "
            }
        ]);
    } while (again.try === 'y' || again.try === 'Y');
    let mes = (chalkAnimation.karaoke("\n          Thanks for using ATM machine!"));
    await sleep();
    mes.stop();

};

await ATM();

