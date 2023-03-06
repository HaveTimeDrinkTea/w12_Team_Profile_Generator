
//--========================================================
//-- 0. Get all the relevant Objects
//--========================================================
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";

// TODO: Write Code to gather information about the development team members, and render the HTML file.

//--========================================================
//-- 1. Get all the relevant packages
//--========================================================

//-- 1.1 Get fs
import * as fs from 'fs';


//-- 1.2 Get path
import * as path from 'path';


//--PW to stop the error ReferenceError: __dirname is not defined in ES module scope,
//-- so need to create a custom __dirname variable that works just like the global variable, containing the full path of the file’s current working directly.

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


//-- 1.3 get inquirer

import inquirer from 'inquirer';


//-- 1.4 Get util 

import * as util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);


//-- 1.5 Get email validator  

import * as emailValidator from "email-validator";


//-- 1.6 Get 

// const render = require("./src/page-template.js");

import render from './src/page-template.js';




//--========================================================
//-- 2. Set standard messages for rendering
//--========================================================

//-- Set welcome and good bye messages

let welcomeMsg = `\n\n\n✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`
   + `                 👯‍♂️🕺🏻👯‍♀️ GOOD DAY GOOD DAY! 👯‍♀️🕺🏻👯‍♂️\n`
   + `      Let's get WERKING and do some fabulous HR Admin Werk! \n \n`
   + `✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n`

   
let goodByeMsg = `\n\n✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`
   + `                 🏅  ConDRAGtulations! 🏅 \n`
   + `                 I am impressed, my dear!  \n`
   + `    You have successfully created a very dashing team webpage! \n`
   + `  The team.html file is now safely stored in the output directory \n`
   + outputPath + `\n`
   + `So, go make a cuppa 🍵 and treat yourself to a choccy bicky 🍪 (or two!) \n`
   + `               Now, my dear, SHASHAY away. \n \n`
   + `✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`  
   
   
   
//--========================================================
//-- 3. Set Set Question for inquirer.js
//--========================================================   

let teamArr = [];

let promptMsg = `So let's go!`;

const qnMain = [
   {
      type: 'list',
      message: `Which role will you be adding to the team?`,
      name: 'addTeamRole',
      choices: ["Engineer", "Intern", "No one else"],
   }, 
]   

const qnAddManager = [
   //-- Manager
   {
      type: 'input',
      message: 'The name of this manager of yours?',
      name: 'mgrName',
      validate(text) {
         if (text === "" ) {
            return 'Oh dear! Blankety blank is not a good name! Please tell me the first name!';
         }
         return true;
      },
      waitUserInput: true,
   },
   {
      type: 'input',
      message: 'and the ID?',
      name: 'mgrID',
      validate(text) {
         let regexTel = /^\d{3}$/g;
         if(!regexTel.test(text)) {
            return "Silly you! You do know that Employee IDs are all 3 digits!"
         };
         return true;
      },
      waitUserInput: true, 
   },
   {
      type: 'input',
      message: 'and the email?',
      name: 'mgrEmail',
      validate(text) {
         let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if(!regexEmail.test(text)) {
            return 'Dear dear, do try again with that email address ...'
         };
         return true;
      },     
      waitUserInput: true, 
   },   
   {
      type: 'input',
      message: 'and the tel number?',
      name: 'mgrOfficeTel',
      validate(text) {
         let regexTel = /^\d{4}$/g;
         if(!regexTel.test(text)) {
            return "Dear dear! that is not a valid four digit telephone extension!"
         };
         return true;
      },
      waitUserInput: true, 
   },
];


const qnAddEngineer = [
   //-- Engineer
   {
      type: 'input',
      message: 'The name of this engineer of yours?',
      name: 'engName',
      validate(text) {
         if (text === "" ) {
            return 'Oh dear! Blankety blank is not a good name! Please tell me the first name!';
         }
         return true;
      },
      waitUserInput: true,
   },
   {
      type: 'input',
      message: 'and the ID?',
      name: 'engID',
      validate(text) {
         let regexTel = /^\d{3}$/g;
         if(!regexTel.test(text)) {
            return "Silly you! You do know that Employee IDs are all 3 digits!"
         };
         return true;
      },
      waitUserInput: true, 
   },
   {
      type: 'input',
      message: 'and their email?',
      name: 'engEmail',
      validate(text) {
         if (!(emailValidator.validate(text))) {
            return 'Dear dear, do try again with that email address ...';
         };
         return true;
      },
      waitUserInput: true,          
   },
   {
      type: 'input',
      message: 'and lastly their GitHub user name?',
      name: 'engGithub',
   },
];

const qnAddIntern = [
   //-- Intern
   {
      type: 'input',
      message: 'The name of this intern of yours?',
      name: 'intName',
      validate(text) {
         if (text === "" ) {
            return 'Oh dear! Blankety blank is not a good name! Please tell me the first name!';
         }
         return true;
      },
      waitUserInput: true,
   },
   {
      type: 'input',
      message: 'and their ID?',
      name: 'intID',
      validate(text) {
         let regexTel = /^\d{3}$/g;
         if(!regexTel.test(text)) {
            return "Silly you! You do know that Employee IDs are all 3 digits!"
         };
         return true;
      },
      waitUserInput: true, 
   },
   {
      type: 'input',
      message: 'and their email?',
      name: 'intEmail',
      validate(text) {
         if (!(emailValidator.validate(text))) {
            return 'Dear dear, do try again with that email address ...';
         };
         return true;
      },
      waitUserInput: true,      
   },
   {
      type: 'input',
      message: 'and lastly their school?',
      name: 'intSchool',
      validate(text) {
         if (text === "" ) {
            return 'Are you sure this intern went to a {blank} school?! Please try again, dear!';
         }
         return true;
      },
      waitUserInput: true,
   },
];



//--========================================================
//-- 4. Call inquirer.js
//--========================================================   

//-- asynchronously call inquirer.js 
//-- and write to the file and increment file number for the next run.



function toCapitalize (str) {
   return str.split(" ").map(word => {
      return word.substring(0, 1).toUpperCase() + word.substring(1);
   }).join(" ");
};



const promptUserMgr = () => {
   return inquirer.prompt(qnAddManager)
   .then(respMenu => {
      const mgrObj = new Manager(
         toCapitalize(respMenu.mgrName)
         , respMenu.mgrID
         , respMenu.mgrEmail
         , respMenu.mgrOfficeTel
         );
      teamArr.push(mgrObj);
      promptUser();

   });
};

const promptUserMenu = () => {
   return inquirer.prompt(qnMain)
   .then(respMenu => {

      if (respMenu.addTeamRole === "Engineer") {
         inquirer.prompt(qnAddEngineer)
            .then(respEng => {
               const engObj = new Engineer(
                  toCapitalize(respEng.engName)
                  , respEng.engID
                  , respEng.engEmail
                  , respEng.engGithub
               );
            teamArr.push(engObj);
            
            promptMsg = `\n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ `+ 
            `\n Good job Adding an Engineer!!` +
            `\n Now any more employees to add?` +
            `\n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  \n`;
            
            promptUser();
            });

      } else if (respMenu.addTeamRole === "Intern") {
         
         inquirer.prompt(qnAddIntern)
            .then(respInt => {
               const intObj = new Intern(
                  toCapitalize(respInt.intName)
                  , respInt.intID
                  , respInt.intEmail
                  , toCapitalize(respInt.intSchool)
               );
            teamArr.push(intObj);
            
            promptMsg = `\n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ `+ 
            `\n Good job Adding an Intern!!` +
            `\n Now any more employees to add?` +
            `\n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  \n`;
            
            promptUser();
            })
      } else {
         
         console.log(`\n ~~~~~~~~~~~~~~~~~~~~ \n Thank you! Job Done! \n ~~~~~~~~~~~~~~~~~~~~`);
         renderHTML(); 
      };
   });
};




const promptUser = async () => {

   try {

      if (teamArr.length === 0) {
         //-- add manager

         const team = await promptUserMgr();
      } else {
         console.log(promptMsg);
         const team = await promptUserMenu();
      }
      // Call inquirer.js


   } catch (err) {
      console.log(err);
   }
};

function renderHTML() {
         // Generate the markdown file
         const readMeFile = render(teamArr);
         writeFileAsync(outputPath, readMeFile);
         console.log(goodByeMsg);
}


//--========================================================
//-- 5. Run inquirer.js
//--========================================================   
console.log(welcomeMsg);
promptUser();

