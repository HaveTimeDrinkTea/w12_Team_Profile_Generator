
//--========================================================
//-- 0. Get all the relevant Objects
//--========================================================
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");



// TODO: Write Code to gather information about the development team members, and render the HTML file.

//--========================================================
//-- 1. Get all the relevant packages
//--========================================================

//-- 1.1 Get fs
import * as fs from 'fs';


//-- 1.2 Get path
import * as path from 'path';


//-- 1.3 get inquirer

import inquirer from 'inquirer';


//-- 1.4 Get util 

import * as util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);

const readFileAsync = util.promisify(fs.readFile);


//-- 1.5 Get email validator  

import * as emailValidator from "email-validator";


//-- 1.6 Get 


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//-- const render = require("./src/page-template.js");

import render from './src/page-template.js';




//--========================================================
//-- 2. Set standard messages for rendering
//--========================================================

//-- Set welcome and good bye messages

let welcomeMsg = `\n\n\n✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`
   + `                 👯‍♂️🕺🏻👯‍♀️ GOOD DAY GOOD DAY! 👯‍♀️🕺🏻👯‍♂️\n`
   + `  Let's get WERKING and do some fabulous HR Admin Werk! \n \n`
   + `✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`

   
let goodByeMsg = `\n\n\n✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`
   + `                🏅  ConDRAGtulations! 🏅 \n`
   + `                 I am impressed, my dear!  \n`
   + ` You have successfully created a very dashing ` + outputPath + `! \n`
   + `               Now, you can SHASHAY away! \n \n`
   + `✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`  
   
   
   
//--========================================================
//-- 3. Set Set Question for inquirer.js
//--========================================================   

const questionsArr = [
   //-- Manager's First Name
   {
      type: 'input',
      message: 'Now, first things first! What is the name of the Team Manager?',
      name: 'name',
      validate(text) {
         if (text === "" ) {
            return 'Oh dear! Blankety blank is not a good name! Please tell me the real first name!';
         }
         return true;
      },
      waitUserInput: true,
   }, 

]   


//--========================================================
//-- 4. Call inquirer.js
//--========================================================   

//-- asynchronously call inquirer.js 
//-- and write to the file and increment file number for the next run.


const promptUser = () => {
   return inquirer.prompt(questionsArr)
};


const init = async () => {

   console.log(welcomeMsg);

   try {

      // Call inquirer.js
      const userResponses = await promptUser();
      
      // Generate the markdown file
      const readMeFile = render(userResponses);

      await writeFileAsync(`./readmes/`+ outputPath, readMeFile);

      console.log(`\n\n Your fabulous ` + outputPath + ` is done, love! Now, go make a cuppa 🍵 and treat yourself to a choccy bicky 🍪 (or two!)`);


      console.log(goodByeMsg);

   } catch (err) {
      console.log(err);
   }
};


//--========================================================
//-- 5. Run inquirer.js
//--========================================================   

init();
