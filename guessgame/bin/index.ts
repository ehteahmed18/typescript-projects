#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";



async function UserInput(){
    let RanNum : number = Math.floor(Math.random()*10);
    let ans= await inquirer.prompt([
        {
        type : "number",
        name : "user",
        message: chalk.cyanBright("\nPlease enter a number from 0-10:  ")
        }
    ]);
    if (ans.user === RanNum) {
        console.log(chalk.yellowBright(`\nNumber selected by computer: ${RanNum}`));
        console.log(chalk.yellowBright(`\nNumber guessed by you: ${ans.user}`));
        console.log(chalk.greenBright("\nHurray!!! You won..\n"));
    }
    else{
        console.log(chalk.yellowBright(`\nNumber selected by computer: ${RanNum}`));
        console.log(chalk.yellowBright(`\nNumber guessed by you: ${ans.user}`));
        console.log(chalk.redBright("\nAlas!! You lose.. Better luck next time\n"));
    }
}
async function DoAgain(){
    console.log(`

 ███╗   ██╗██╗   ██╗███╗   ███╗██████╗ ███████╗██████╗      ██████╗ ██╗   ██╗███████╗███████╗███████╗██╗███╗   ██╗ ██████╗      ██████╗  █████╗ ███╗   ███╗███████╗
 ████╗  ██║██║   ██║████╗ ████║██╔══██╗██╔════╝██╔══██╗    ██╔════╝ ██║   ██║██╔════╝██╔════╝██╔════╝██║████╗  ██║██╔════╝     ██╔════╝ ██╔══██╗████╗ ████║██╔════╝
 ██╔██╗ ██║██║   ██║██╔████╔██║██████╔╝█████╗  ██████╔╝    ██║  ███╗██║   ██║█████╗  ███████╗███████╗██║██╔██╗ ██║██║  ███╗    ██║  ███╗███████║██╔████╔██║█████╗  
 ██║╚██╗██║██║   ██║██║╚██╔╝██║██╔══██╗██╔══╝  ██╔══██╗    ██║   ██║██║   ██║██╔══╝  ╚════██║╚════██║██║██║╚██╗██║██║   ██║    ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  
 ██║ ╚████║╚██████╔╝██║ ╚═╝ ██║██████╔╝███████╗██║  ██║    ╚██████╔╝╚██████╔╝███████╗███████║███████║██║██║ ╚████║╚██████╔╝    ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗
 ╚═╝  ╚═══╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝     ╚═════╝  ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝
                                                                                                                                                               
    `);
    do{
        await UserInput();
        var again = await inquirer.prompt([
            {
                type: "string",
                name: "try",
                message: "Do you waanna try again (y/n)? "
            }
        ])
    }while(again.try === 'y'|| again.try === 'Y')
    
}

DoAgain();
