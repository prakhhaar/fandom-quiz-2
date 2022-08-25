// LessonOne Assignment
const chalk = require("chalk");
var readlineSync = require("readline-sync");
1
var score = 0;

console.log(chalk.blue("Welcome to football quiz"));
console.log("--------------------");

if(readlineSync.keyInYN("Is CR7 still playing for Real Madrid? ")){
  console.log(chalk.underline.red("You're wrong!"));
} else {
  score++;
  console.log(chalk.underline.green("You're right! and your score is: " + score));
}

var options = ["18 yards", "15 yards", "22 yards", "4 yards"];
var question = readlineSync.keyInSelect(options, "The penalty are is usually how from from the touch line? ");
if(options[question] == "18 yards"){
  score++;
  console.log(chalk.underline.green("You're right! and your score is: " + score));
} else {
  console.log(chalk.red("You're wrong!"));
}