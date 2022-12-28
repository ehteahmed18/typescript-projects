#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let arr = [];
async function welcome() {
    console.log(`

  ████████╗ ██████╗ ██████╗  ██████╗     ██╗     ██╗███████╗████████╗
  ╚══██╔══╝██╔═══██╗██╔══██╗██╔═══██╗    ██║     ██║██╔════╝╚══██╔══╝
     ██║   ██║   ██║██║  ██║██║   ██║    ██║     ██║███████╗   ██║   
     ██║   ██║   ██║██║  ██║██║   ██║    ██║     ██║╚════██║   ██║   
     ██║   ╚██████╔╝██████╔╝╚██████╔╝    ███████╗██║███████║   ██║   
     ╚═╝    ╚═════╝ ╚═════╝  ╚═════╝     ╚══════╝╚═╝╚══════╝   ╚═╝                                                                   
    `);
}
async function todo_list() {
    await welcome();
    do {
        var ans = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "Please choose: ",
                choices: ["1) Add", "2) Remove", "3) Update Your List", "4) View", "5) Change Status to Complete", "6) Exit"]
            }
        ]);
        if (ans.option === "1) Add") {
            var add = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter the task: "
                }
            ]);
            console.log(chalk.yellowBright('\nTask Added Successfully\n'));
            arr.push({
                Task: `${add.name}`,
                Status: "Incomplete"
            });
        }
        else if (ans.option === "4) View") {
            console.log(arr);
        }
        else if (ans.option === "2) Remove") {
            do {
                var rem = await inquirer.prompt([
                    {
                        type: "number",
                        name: "num",
                        message: "Enter task number to remove(starting with 0): "
                    }
                ]);
                // console.log("Not in list! Enter again ");
            } while (rem.num > (arr.length - 1));
            console.log(chalk.yellowBright('\nTask Removed Successfully'));
            let a = rem.num;
            arr.splice(a, 1);
            console.log('\nAfter removing: ');
            console.log(arr);
        }
        else if (ans.option === '5) Change Status to Complete') {
            do {
                var com = await inquirer.prompt([
                    {
                        type: "input",
                        name: "num",
                        message: "Enter task number to change status(starting with 0): ",
                    }
                ]);
                // console.log("Not in list! Enter again ");
            } while (com.num > (arr.length - 1));
            arr[com.num].Status = 'Complete';
            console.log(chalk.yellowBright('\nTask Changed Successfully'));
            console.log('\nAfter Changing Status: ');
            console.log(arr);
        }
        else if (ans.option === '3) Update Your List') {
            do {
                var update = await inquirer.prompt([
                    {
                        type: "number",
                        name: "num",
                        message: "Enter task number to update your list(starting with 0): "
                    }
                ]);
                // console.log("Not in list! Enter again ");
            } while (update.num > (arr.length - 1));
            var upd = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter the task: "
                }
            ]);
            console.log(chalk.yellowBright('\nTask Updated Successfully'));
            arr[update.num].Task = `${upd.name}`;
            arr[update.num].Status = 'Incomplete';
            console.log('\nAfter Updating Your List: ');
            console.log(arr);
        }
    } while (ans.option != '6) Exit');
    console.log(chalk.redBright("\nEnding program"));
}
await todo_list();
