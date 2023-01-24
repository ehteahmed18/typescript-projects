#! /usr/bin/env node

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
// class Welcome{
// }
var Human = /** @class */ (function () {
    function Human() {
        this.drinkPortion = 3;
        this.Humanhealth = 100;
    }
    return Human;
}());
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster() {
        var _this = _super.call(this) || this;
        _this.Name = ["Zombie", "Creeper", "Monster"];
        _this.monName = _this.Name[Math.floor(Math.random() * _this.Name.length)];
        _this.MonsterHealth = Math.floor(Math.random() * (90 - 30)) + 30;
        _this.deadmonsters = 0;
        return _this;
    }
    return Monster;
}(Human));
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.totalScore = 0;
        return _this;
    }
    Main.prototype.healthPortion = function () {
        this.humanDamageHealth = Math.floor(Math.random() * (25 - 10)) + 10;
        this.MonsterDamageHealth = Math.floor(Math.random() * (40 - 10)) + 10;
        this.Humanhealth = this.Humanhealth - this.humanDamageHealth;
        this.MonsterHealth = this.MonsterHealth - this.MonsterDamageHealth;
        console.log("-----------------------------------------------");
        console.log(chalk_1["default"].cyan("\nYou lost: ".concat(this.humanDamageHealth)));
        console.log(chalk_1["default"].cyan("\n".concat(this.monName, " loses: ").concat(this.MonsterDamageHealth)));
        console.log(chalk_1["default"].cyan("\nYour remaining health is ".concat(this.Humanhealth)));
        console.log(chalk_1["default"].cyan("\n".concat(this.monName, " remaining health is ").concat(this.MonsterHealth)));
        console.log("-----------------------------------------------");
        if (this.MonsterHealth <= 0 && this.Humanhealth > 0) {
            this.deadmonsters = this.deadmonsters + 1;
            this.totalScore = this.totalScore + 10;
            console.log(chalk_1["default"].red("\n".concat(this.monName, " is Executed")));
            this.monName = this.Name[Math.floor(Math.random() * this.Name.length)];
            this.MonsterHealth = Math.floor(Math.random() * 100);
            console.log(chalk_1["default"].blueBright("\nNew ".concat(this.monName, " arrived and its HP is ").concat(this.MonsterHealth)));
            console.log("-----------------------------------------------");
            this.rannumber = Math.floor(Math.random() * (5 - 0)) + 0;
            if (this.rannumber === 3) {
                console.log(chalk_1["default"].greenBright("\n".concat(this.monName, " left a health portion")));
                this.drinkPortion = this.drinkPortion + 1;
                console.log(chalk_1["default"].greenBright("\nYou have now ".concat(this.drinkPortion, " health portions left")));
                console.log("-----------------------------------------------");
            }
        }
        else if (this.MonsterHealth <= 0 || this.Humanhealth <= 0) {
            console.log(chalk_1["default"].redBright("\n\nGAME OVER!! YOU DIED\n\n"));
            console.log(chalk_1["default"].blueBright("You killed ".concat(this.deadmonsters, " monsters. ")));
            console.log(chalk_1["default"].blueBright("Your Score: ".concat(this.totalScore, "\n")));
        }
    };
    Main.prototype.drinkhp = function () {
        if (this.drinkPortion > 0) {
            this.drinkPortion = this.drinkPortion - 1;
            this.drinkportions = this.Humanhealth;
            this.Humanhealth = this.drinkportions + 30;
            console.log("-----------------------------------------------");
            console.log(chalk_1["default"].blueBright("\nYour health has increased to ".concat(this.Humanhealth, "\n")));
            console.log(chalk_1["default"].blueBright("\nYou have now ".concat(this.drinkPortion, " health portions left.")));
            console.log("-----------------------------------------------");
        }
        else {
            console.log("-----------------------------------------------");
            console.log(chalk_1["default"].blueBright("\nYou are out of Health Portions\n"));
            console.log("-----------------------------------------------");
        }
    };
    Main.prototype.run = function () {
        this.monName = this.Name[Math.floor(Math.random() * this.Name.length)];
        this.MonsterHealth = Math.floor(Math.random() * 100);
        console.log("-----------------------------------------------");
        console.log(chalk_1["default"].blue("\nYou ran but a new ".concat(this.monName, " has appeared and its HP is ").concat(this.MonsterHealth)));
        console.log("-----------------------------------------------");
    };
    return Main;
}(Monster));
var attack = new Main();
function welcome() {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("-----------------------------------------------");
                    console.log(chalk_1["default"].yellowBright("          Welcome to adventure game"));
                    console.log("-----------------------------------------------");
                    console.log(chalk_1["default"].greenBright("Your health Portion is: ".concat(attack.Humanhealth, "\nA ").concat(attack.monName, " arrived and its HP is: ").concat(attack.MonsterHealth)));
                    console.log("-----------------------------------------------");
                    _a.label = 1;
                case 1: return [4 /*yield*/, inquirer_1["default"].prompt([
                        {
                            type: 'list',
                            name: 'options',
                            message: "Select anyone: ",
                            choices: ["Attack", "Drink Health Portion", "Run"]
                        }
                    ])];
                case 2:
                    user = _a.sent();
                    if (user.options === "Attack") {
                        attack.healthPortion();
                    }
                    else if (user.options === "Drink Health Portion") {
                        attack.drinkhp();
                    }
                    else if (user.options === "Run") {
                        attack.run();
                    }
                    _a.label = 3;
                case 3:
                    if (attack.Humanhealth > 0) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function playAgain() {
    return __awaiter(this, void 0, void 0, function () {
        var playAgain;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, welcome()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, inquirer_1["default"].prompt([
                            {
                                type: "input",
                                name: "name",
                                message: "\nDo you wanna play Again? (y/n): "
                            }
                        ])];
                case 2:
                    playAgain = _a.sent();
                    if (playAgain.name === "y" || playAgain.name === "Y") {
                        attack.Humanhealth = 100;
                        attack.monName = attack.Name[Math.floor(Math.random() * attack.Name.length)];
                        attack.MonsterHealth = Math.floor(Math.random() * 100);
                        attack.deadmonsters = 0;
                        attack.totalScore = 0;
                    }
                    _a.label = 3;
                case 3:
                    if (playAgain.name === "y" || playAgain.name === "Y") return [3 /*break*/, 0];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
playAgain();
