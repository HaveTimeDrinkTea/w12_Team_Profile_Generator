// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// const Employee = require("./Employee.js");

import Employee from "./Employee.js";

export default class Intern extends Employee{
   constructor(empName, empID, empEmail, internSchool ) {

      super(empName, empID, empEmail);

      this.school = internSchool;
   }

   //-- get Intern's school Method
   getSchool() {
      return this.school;
   }    

   //-- get Role Method
   getRole() {
      let empRole  = 'Intern';
      return empRole;
   }   
   
}

//-- Export the Engineer class
// module.exports = Intern;

