import inquirer from "inquirer"; 
let date_ob = new Date();
let distance = true;

class currentDate{
    date: any;
    month: any;
    year: number;
    constructor(){
        this.date = ("0" + date_ob.getDate()).slice(-2);
        this.month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        this.year = date_ob.getFullYear();
    }
}
class currentTime{
    hours: number;
    minutes: number;
    seconds: number;
    constructor(){
        this.hours = date_ob.getHours();
        this.minutes = date_ob.getMinutes();
        this.seconds = date_ob.getSeconds();
    }
}
class Timer{
    timerSet: any;
    timer(ask:any){
        // Set the date we're counting down to
        let countDownDate = new Date(ask).getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let timerSet = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(timerSet / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timerSet % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timerSet % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timerSet % (1000 * 60)) / 1000);
            // console.log(`${days}  d  ${hours}  h  ${minutes}  m  ${seconds}  s `);
            if (timerSet > 0) {
                console.log(`${days}  d  ${hours}  h  ${minutes}  m  ${seconds}  s `);
            }
            else {
                clearInterval(x);
                console.log("\n======EXPIRED======")
            }
        }, 1000)
    }
}

async function get(){
let result = await inquirer.prompt([
    {
        type: "list",
        name: "name",
        message: "Select any one: ",
        choices: ["Current Time", "Current Date", "Timer"]
    }
])
if (result.name === "Current Time"){
    const x = new currentTime;
    console.log(`Time in 24 hour format \n ${x.hours}:${x.minutes}:${x.seconds}`);
    
}
else if (result.name === "Current Date"){
    const y = new currentDate;
    console.log(`Date in YYYY-MM-DD format \n ${y.year}-${y.month}-${y.date}`);
}
else if (result.name === "Timer"){
    const x = new Timer;
    let ask = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the timer you wanna set (e.g Dec 28, 2022 01:42:00) "
        }
    ])
    async function timer(){
    x.timer(ask.name);
    }
    await timer();
}
}

// async function DoAgain() {
//     do {
//         await get();
//         var again = await inquirer
//         .prompt([
//             {
//                 type: "input",
//                 name: 'asking',
//                 message: "Do you want to Calculate Again (y/n): ",
//             }
//         ])
//     } while (again.asking === "y" || again.asking === "Y" || again.asking === "yes" || again.asking === "YES")
// }
// DoAgain()
await get()