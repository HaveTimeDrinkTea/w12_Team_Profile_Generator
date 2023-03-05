// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// const Employee = require("./Employee.js");

import Employee from "./Employee.js";

export default class Engineer extends Employee {
   constructor(empName, empID, empEmail, EmpGitHub) {
      
      super(empName, empID, empEmail);

      this.github = EmpGitHub;
   }

   //-- get GitHub user Name Method
   getGithub() {
      return this.github;
   }   


   //-- get Role Method
   getRole() {
      let empRole  = 'Engineer';
      return empRole;
   }
}

//-- Export the Engineer class
// module.exports = Engineer;