#! /usr/bin/env node
import inquirer from "inquirer";
import CC from "currency-converter-lt2";
// import currencyCode from "currency-converter-lt2"
async function convert() {
    let result = await inquirer.prompt([
        {
            type: 'input',
            name: 'fcurrency',
            message: "Enter currency code you want to convert: "
        },
        {
            type: 'input',
            name: 'tcurrency',
            message: "Enter currency code in which you want to convert"
        },
        {
            type: 'number',
            name: 'amount',
            message: "Amount to convert: "
        }
    ]);
    let currencyConverter = new CC({
        from: result.fcurrency,
        to: result.tcurrency,
        amount: result.amount
    });
    await currencyConverter.convert().then((response) => {
        console.log(`${result.amount} ${result.fcurrency} is equal to ${response} ${result.tcurrency}`);
    });
}
async function DoAgain() {
    do {
        await convert();
        var again = await inquirer
            .prompt([
            {
                type: "input",
                name: 'asking',
                message: "Do you want to Calculate Again (y/n): ",
            }
        ]);
    } while (again.asking === "y" || again.asking === "Y" || again.asking === "yes" || again.asking === "YES");
}
DoAgain();
