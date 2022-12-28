#! /usr/bin/env node
import inquirer from "inquirer";
let totalWords = 0;


async function count() {
    let result = await inquirer.prompt([
        {
            type: 'text',
            name: 'count',
            message: "Enter the text: "
        }
    ]);
    //For counting words
    for (let i = 0; i < result.count.length; i++) {
        if (result.count[i] === ' ') {
            totalWords += 1;
        }
    }
    totalWords += 1 // Since last word won't count in above block
    //For counting characters
    let totalCharacters = result.count.length;
    for (let i = 0; i < result.count.length; i++) {
        if (!(result.count[i] != ' ')) {
            totalCharacters = totalCharacters - 1;
        }
    }
    // if there is no text
    if (result.count.length === 0) {
        totalWords = 0;
    }
    console.log(`\nTotal Words: ${totalWords}`);
    console.log(`\nTotal Characters (without whitespaces): ${totalCharacters}`);
    console.log(`\nTotal Characters (with whitespaces): ${result.count.length}`);
}

async function Again() {
    console.log(`
    
 ██╗    ██╗ ██████╗ ██████╗ ██████╗      ██████╗ ██████╗ ██╗   ██╗███╗   ██╗████████╗███████╗██████╗ 
 ██║    ██║██╔═══██╗██╔══██╗██╔══██╗    ██╔════╝██╔═══██╗██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔══██╗
 ██║ █╗ ██║██║   ██║██████╔╝██║  ██║    ██║     ██║   ██║██║   ██║██╔██╗ ██║   ██║   █████╗  ██████╔╝
 ██║███╗██║██║   ██║██╔══██╗██║  ██║    ██║     ██║   ██║██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗
 ╚███╔███╔╝╚██████╔╝██║  ██║██████╔╝    ╚██████╗╚██████╔╝╚██████╔╝██║ ╚████║   ██║   ███████╗██║  ██║
  ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═════╝      ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝                                                                                                     
        `)
    do {
        await count();
        var doAgain = await inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: "\nDo you want to count again? (y/n): "
            }
        ])
    }while(doAgain.name === 'y'|| doAgain.name === 'Y')
}

await Again();