# w12_Team_Profile_Generator

## Description

This project is part of the Frontend Dev Boot Camp course challenge for the eleventh week "Working with ES6 and Node.js". 

It requires us to use the node.js inquirer package and ES6 to dynamically create a command-line README.md generator application that produces a high quality professional README.md. 

### Methodology: Pseudo Code
* 



## User Story

AS A manager

I WANT to generate a webpage that displays my team's basic info

SO THAT I have quick access to their email address and GitHub profiles.


## Acceptance Criteria

* A command-line application that accepts user input using the provided starter code.

* Create classes for each team member provided and export them. 

* The tests for these classes, which are located in the _tests_ directory, must ALL pass.

* The classes are
  * `Employee` parent class with 
    * properties name, id, email and 
    * methods getName(), getId(), getEmail() and getRole() which will return 'Employee'. 
  * `Manager` class will extend `Employee` class and have
    * property `officeNumber`
    * method `getRole()` —overridden to return '***Manager***'
  * `Engineer` class will extend `Employee` class and have
    * property `github`—GitHub username
    * methods `getGithub()` and `getRole()` —overridden to return '***Engineer***'
  * `Intern` class will extend Employee class and have
    * property `school`
    * methods `getSchool()` and `getRole()` —overridden to return '***Intern***'

* Although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

* Write code in index.js that uses Inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.

* When a user starts the application:
  * They're prompted to enter the ***team manager's*** 
    * `name`, 
    * Employee `id`, 
    * `email`, 
    * `officeNumber

  * When a user enters those requirements, the user is presented with a menu with the option to:
    * ***Add an engineer***
      * When a user selects the engineer option, the user is prompted to enter the following and then taken back to the menu:
        * Engineer's `name`
        * `id`
        * `email`
        * `GitHub` username

    * ***Add an intern***
      * When a user selects the intern option, the user is prompted to enter the following and then taken back to the menu:
        * Intern’s `name`
        * `id`
        * `email`
        * `school`

    * ***Finish building the team***
      * When a user decides to finish building their team, they exit the application and the HTML is generated.

* Call the render function (provided for you) and pass in an array containing all employee objects.

* The render function will generate and return a block of HTML including templated div elements for each employee.

* Create an HTML file using the HTML returned from the render function.

* Write it to a file named `team.html` in the output folder.

* You can use the provided variable `outputPath` to target this location.

## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Testing](#testing)
* [Contribution](#contribution)


# Installation

* N.A.


## Usage 

### Screen Dumps:

[screen dump1](assets/images/)




## Credits

* this [thingie](https://)





## License 

MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## Features

### Main Features
* 

  
  
### Future Developments
* 


## Testing
* This 



## Contribution
* If you would like to contribute to this application, please contact me via
  * GitHub [https://github.com/HaveTimeDrinkTea/w11_Professional_README_Generator](https://github.com/HaveTimeDrinkTea/w11_Professional_README_Generator)
  * email to <havetimedrinktea@gmail.com>

