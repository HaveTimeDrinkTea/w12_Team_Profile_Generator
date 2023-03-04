// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Engineer extends Employee {
   constructor(empName, empID, empEmail, EmpGitHub) {
      
      super(empName, empID, empEmail);

      this.github = EmpGitHub;
   }

   //-- get GitHub user Name Method
   getGitHub() {
      return this.github;
   }   


   //-- get Role Method
   getRole() {
      let empRole  = 'Engineer';
      return empRole;
   }
}

//-- Export the Engineer class
module.exports = Engineer;