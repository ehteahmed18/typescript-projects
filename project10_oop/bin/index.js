#! /usr/bin/env node
import inquirer from "inquirer";
class Person {
    personality;
    constructor() {
        this.personality = "";
    }
    AskQuestion(answer) {
        if (answer == "Talk to others") {
            this.personality = "an Extrovert";
        }
        else if (answer == "Spend time alone") {
            this.personality = "an Introvert";
        }
        else {
            this.personality = "still a mystery";
        }
    }
    GetPersonlity() {
        return this.personality;
    }
}
class Student extends Person {
    _name = "";
    NAME(answer) {
        this._name = answer;
    }
    get Name() {
        return this._name;
    }
    set Name(value) {
        this._name = value;
    }
}
let myStudent = new Student();
async function OOP() {
    let answer = await inquirer.prompt([
        {
            type: "text",
            name: "NAME",
            message: "Enter your name: "
        },
        {
            type: "list",
            name: "name",
            message: "Select anyone: ",
            choices: ["Talk to others", "Spend time alone", "None of these"]
        }
    ]);
    myStudent.NAME(answer.NAME);
    myStudent.AskQuestion(answer.name);
    console.log(`Your name is ${myStudent.Name} and you are ${myStudent.GetPersonlity()}`);
}
OOP();
