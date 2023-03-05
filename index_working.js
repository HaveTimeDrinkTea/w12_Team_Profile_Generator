
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

// const readFileAsync = util.promisify(fs.readFile);


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
   + `  Let's get WERKING and do some fabulous HR Admin Werk! \n \n`
   + `✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`

   
let goodByeMsg = `\n\n\n✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`
   + `                🏅  ConDRAGtulations! 🏅 \n`
   + `                 I am impressed, my dear!  \n`
   + `    You have successfully created a very dashing team webpage at \n` + 
   +  outputPath + `\n`
   + ` So, go make a cuppa 🍵 and treat yourself to a choccy bicky 🍪 (or two!) \n`
   + `               Now, you can SHASHAY away! \n \n`
   + `✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`  
   
   
   
//--========================================================
//-- 3. Set Set Question for inquirer.js
//--========================================================   

let teamArr = [];

// const qnAddTeamMemberArr = [
//    {
//       type: 'list',
//       message: 'Which role are you adding to the team?',
//       name: 'addTeamRole',
//       choices: ["Manager", "Engineer", "Intern", "No one else"],
//    }, 
// ]   

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
   },
   {
      type: 'input',
      message: 'and the email?',
      name: 'mgrEmail',
   },
   {
      type: 'input',
      message: 'and the tel number?',
      name: 'mgrOfficeNumber',
   },
   // {
   //    type: 'list',
   //    name: 'addMore',
   //    message: '\n ~~~~~~~~~~ \n Good job!! \n Any more employees to add?',
   //    choices: ['Oh yes...', 'Thank goodness no more!'],
   // } 
];



//--========================================================
//-- 4. Call inquirer.js
//--========================================================   

//-- asynchronously call inquirer.js 
//-- and write to the file and increment file number for the next run.

const promptUserMgr = () => {
   return inquirer.prompt(qnAddManager)
   .then(respMgr => {
      const managerObj = new Manager(respMgr.mgrName, respMgr.mgrID, respMgr.mgrEmail, respMgr.mgrOfficeNumber);
      teamArr.push(managerObj);
      console.log("teamArr:", teamArr)
      console.log("typeof teamArr", typeof teamArr);
      console.log("=========");
      return teamArr;
})};



const init = async () => {

   try {
      console.log(welcomeMsg);
      // Call inquirer.js
      const team = await promptUserMgr();
      
      // Generate the markdown file
      console.log("IS IT HERE? team:", team);
      console.log("typeof team", typeof team);

      const readMeFile = render(team);

      console.log("readMeFile:", readMeFile);

      await writeFileAsync(outputPath, readMeFile);
      console.log(goodByeMsg);
   } catch (err) {
      console.log(err);
   }
};


//--========================================================
//-- 5. Run inquirer.js
//--========================================================   

init();








// const promptUserMain = () => {
//    return inquirer.prompt(qnAddTeamMemberArr)
//    .then(respMain => {
//       switch(respMain.addTeamRole) {

//          case "Manager":
//             initMgr();
//             break;
//          case "Engineer":
//             initMgr();
//             break;
//          case "Intern":
//             initMgr();
//             break;            
//          default: 
//          console.log("bye!");
//          return;

//       };

// })};

