// TODO: Write code to define and export the Employee class

export default class Employee {
   constructor(empName, empID, empEmail) {

      this.name = empName;
      this.id = empID;
      this.email = empEmail;
   }
   //--get employee name method
   getName() {
      return this.name;
   }

   //--get employee ID method
   getId() {
      return this.id;
   }

   //--get employee Email method
   getEmail() {
      return this.email;

   }
   //--get employee Role method
   getRole() {
      let empRole  = 'Employee';
      return empRole;
   }

}

//-- Initialize Emp ID
//-- Note that this lastID is attached to the class (the "blueprint") and to to the object 

// Employee.lastID = 1;


// //-- Export the Employee class
// module.exports = Employee;