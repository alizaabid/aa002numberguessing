#! /urs/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()* 6+1);

const answer = await inquirer.prompt([{
    name:"userGuessedNumber",
    type:"number",
    message:"pleased guessed a number:",
},]);

if(answer.userGuessedNumber===randomNumber ){console.log("congratulations! you guessed right number.")}
else{console.log("you guessed a wrong number");}