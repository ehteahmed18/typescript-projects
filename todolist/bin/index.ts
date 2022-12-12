#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let arr: any[]=[];


async function todo_list(){
    do{
    var ans = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "Please choose: ",
            choices: ["1) Add","2) Remove","3) Update Your List","4) View","5) Change Status to Complete","6) Exit"]
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
        arr.push({
            Task: `${add.name}`,
            Status: "Incomplete" 
        });
    }
    else if (ans.option === "4) View"){
            console.log(arr);
    }
    else if (ans.option === "2) Remove"){
        var rem= await inquirer.prompt([
            {
                type: "number",
                name: "num",
                message: "Enter task number to remove(starting with 0): "
            }
        ]);
        let a = rem.num;
        arr.splice(a,1);
        console.log('\nAfter removing: ');
        console.log(arr);   
    }
    else if(ans.option === '5) Change Status to Complete'){
        var com= await inquirer.prompt([
            {
                type: "number",
                name: "num",
                message: "Enter task number to change status(starting with 0): "
            }
        ]);
        arr[com.num].Status = 'Complete';
        console.log('\nAfter Changing Status: ');
        console.log(arr);
    }
    else if(ans.option === '3) Update Your List'){
        var update= await inquirer.prompt([
            {
                type: "number",
                name: "num",
                message: "Enter task number to update your list(starting with 0): "
            }
        ]);
        var upd = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the task: "
            }
        ]);
        arr[update.num].Task = `${upd.name}`;
        arr[update.num].Status = 'Incomplete';
        console.log('\nAfter Updating Your List: ');
        console.log(arr);  
    }
    }while (ans.option != '6) Exit');
    console.log("Ending program")
}
await todo_list();

