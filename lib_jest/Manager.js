// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");


class Manager extends Employee {
   constructor(empName, empID, empEmail, mgrOfficeTel) {

      super(empName, empID, empEmail);

      this.officeNumber = mgrOfficeTel;
   }
   
   //-- get Manager's office Number 
   getOfficeNumber() {
      return this.officeNumber;
   }  

   //-- get Role Method
   getRole() {
      let empRole  = 'Manager';
      return empRole;
   }
}

//-- Export the Engineer class
module.exports = Manager;