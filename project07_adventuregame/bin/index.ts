import inquirer from "inquirer";
import chalk from "chalk";


// class Welcome{

// }
class Human {
    // public username!:string;
    Humanhealth: number;
    drinkPortion: number;
    constructor() {
        this.drinkPortion = 3;
        this.Humanhealth = 100;
    }
}

class Monster extends Human {
    Name: string[]
    monName: string;
    MonsterHealth: number;
    deadmonsters:number;
    constructor() {
        super()
        this.Name = ["Zombie", "Creeper", "Monster"];
        this.monName = this.Name[Math.floor(Math.random() * this.Name.length)]
        this.MonsterHealth = Math.floor(Math.random() * 100)
        this.deadmonsters = 0;
    }
}

class Main extends Monster {
    humanDamageHealth!: number;
    MonsterDamageHealth!: number;
    drinkportions!: number;
    healthdrinkportions!: number;
    totalScore: number;
    constructor() {
        super()
        this.totalScore = 0;
    }
    healthPortion() {
        this.humanDamageHealth = Math.floor(Math.random() * (25 - 10) + 10);
        this.MonsterDamageHealth = Math.floor(Math.random() * (40 - 10)) + 10;
        this.Humanhealth = this.Humanhealth - this.humanDamageHealth;
        this.MonsterHealth = this.MonsterHealth - this.MonsterDamageHealth;
        console.log("-----------------------------------------------")
        console.log(chalk.cyan(`\nYou lost: ${this.humanDamageHealth}`));
        console.log(chalk.cyan(`\n${this.monName} loses ${this.MonsterDamageHealth}`));
        console.log(chalk.cyan(`\nYour remaining health is ${this.Humanhealth}`));
        console.log(chalk.cyan(`\n${this.monName} remaining health is ${this.MonsterHealth}`));
        console.log("-----------------------------------------------")
        if (this.MonsterHealth <= 0 && this.Humanhealth > 0) {
            this.deadmonsters = this.deadmonsters + 1;
            this.totalScore = this.totalScore + 10; 
            console.log(chalk.red(`\n${this.monName} is Executed`));
            this.monName = this.Name[Math.floor(Math.random() * this.Name.length)]
            this.MonsterHealth = Math.floor(Math.random() * 100)
            console.log(chalk.blueBright(`\nNew ${this.monName} arrived and its HP is ${this.MonsterHealth}`));
            console.log("-----------------------------------------------")
        }
        else if (this.MonsterHealth <= 0 || this.Humanhealth < 0) {
            console.log(chalk.redBright(`\n\nGAME OVER!! YOU DIED\n\n`));
            console.log(chalk.blueBright(`You killed ${this.deadmonsters} monsters. `));
            console.log(chalk.blueBright(`Your Score: ${this.totalScore}\n`));
        }

    }
    drinkhp() {
        if (this.drinkPortion > 0) {
            this.drinkPortion = this.drinkPortion - 1;
            this.drinkportions = this.Humanhealth;
            this.Humanhealth = this.drinkportions + 30;
            console.log("-----------------------------------------------")
            console.log(chalk.blueBright(`\nYour health has increased to ${this.Humanhealth}\n`));
            console.log("-----------------------------------------------")
        }
        else {
            console.log("-----------------------------------------------")
            console.log(chalk.blueBright("\nYou are out of Health Portions\n"));
            console.log("-----------------------------------------------")
        }

    }
    run() {
        this.monName = this.Name[Math.floor(Math.random() * this.Name.length)]
        this.MonsterHealth = Math.floor(Math.random() * 100)
        console.log("-----------------------------------------------")
        console.log(chalk.blue(`\nYou ran but a new ${this.monName} has appeared and its HP is ${this.MonsterHealth}`));
        console.log("-----------------------------------------------")
    }
}


const attack = new Main();

async function welcome() {
    console.log("-----------------------------------------------")
    console.log(chalk.yellowBright("          Welcome to adventure game")); 
    console.log("-----------------------------------------------")
    console.log(chalk.greenBright(`Your health Portion is: ${attack.Humanhealth}\nA ${attack.monName} arrived and its HP is: ${attack.MonsterHealth}`));
    console.log("-----------------------------------------------")
    do {
        var user = await inquirer.prompt([
            {
                type: 'list',
                name: 'options',
                message: "Select anyone: ",
                choices: ["Attack", "Drink Health Portion", "Run"]
            }
        ])

        if (user.options === "Attack") {
            attack.healthPortion();
        }
        else if (user.options === "Drink Health Portion") {
            attack.drinkhp();
        }
        else if (user.options === "Run") {
            attack.run();
        }
    } while (attack.Humanhealth > 0);
}

async function playAgain(){
    do{
        await welcome();
        var playAgain = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "\nDo you wanna play Again? (y/n): "
            }
        ])
        if (playAgain.name === "y" || playAgain.name === "Y"){
            attack.Humanhealth = 100;
            attack.monName = attack.Name[Math.floor(Math.random() * attack.Name.length)]
            attack.MonsterHealth = Math.floor(Math.random() * 100)
            attack.deadmonsters = 0;
            attack.totalScore = 0;
        }
    }while (playAgain.name === "y" || playAgain.name === "Y")
}
playAgain();


