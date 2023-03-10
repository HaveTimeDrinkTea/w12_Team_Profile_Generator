# w12_Team_Profile_Generator

## Description

This project is part of the Frontend Dev Boot Camp course challenge for the twelve week "Test-Driven Development". 

It requires us to use the node.js, inquirer package and ES6 classes to dynamically create a command-line README.md generator application that produces a Team Profile Generator. We are also expected to demonstrate the use of Jest.js in a test-driven development project.

This application has been created on top of the starter code provided.


### Methodology: Pseudo Code
* Complete all the class definitions for `Employee`, `Manager`, `Engineer` and `Intern`.
* Attempt to pass all the test as provided by the starter code.
* Set up inquirer.js prompt questions and looping of menu
* Render the data to the team.html
* Restyle team.html.




## User Story

AS A manager

I WANT to generate a webpage that displays my team's basic info

SO THAT I have quick access to their email address and GitHub profiles.


[Video Demo (1mins 53 secs) Screencastify recording on GDrive](https://drive.google.com/file/d/1l79HqVfi5WG52blP9bp-ruU-CnhoFwrX/view) or click on the embedded video below:




https://user-images.githubusercontent.com/119045159/223231937-129c144a-4973-4f15-9cb4-529c7c901883.mp4




## Acceptance Criteria

* A command-line application that accepts user input using the provided starter code.

* Create classes for each team member provided and export them. 

* The tests for these classes, which are located in the _tests_ directory, must ALL pass.

* The classes are
  * `Employee` parent class with 
    * properties `name`, `id`, `email` and 
    * methods `getName()`, `getId()`, `getEmail()` and `getRole()` (which defaults to `Employee`). 
  * `Manager` class will extend `Employee` class and have
    * property `officeNumber`
    * methods `getRole()` (—overridden to return '***Manager***') and `getOfficeNumber()`
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
    * `officeNumber`

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

* The application should use Jest for running units and Inquirer for collecting input from the user. The application will be invoked by using the following command: 

```
   node index.js
```

* Aim to make your methods as pure as possible to allow simple testing. 

* Test each class and verify that it generates an object with the correct structure and methods. The Jest tests have already been provided as part of the starter code.



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


![screen dump - Application Start](output/teamProfileGenerator.png)

![screen dump - Application Ends](output/teamProfileGenerator2.png)


### Sample team.html Page:

[Sample team.html](output/team-sample.html)

[Preview Sample team.html ](https://htmlpreview.github.io/?https://github.com/HaveTimeDrinkTea/w12_Team_Profile_Generator/blob/main/output/team-sample.html)

[Sample team.html pdf](output/team-sample.pdf)

![Sample team.html jpg](output/team-sample.jpg)


## Credits

* [regexpal](https://www.regexpal.com) to help with formulating regex tests.



## License 

MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## Features

### Main Features
A command line application which allows a user to record details of the members of a team.
* Upon running the application, the user is asked to enter the team manager's information. 


* All the user inputs are validated:
  * Team member name and intern's school name cannot be blank.
  * Team member name and intern's school name will have capital case.
  * Manager's telephone extension can only be numeric and has to be of 4-digit length.
  * All employee IDs are to be 3-digit
  * All emails are to be of the right email format (name@domain.tld).
  * Engineer's GitHub username will have any spaces stripped off.
  
  
### Future Developments
* Allow employee ID to be sequentially generated without any user input. 
  * This can be achieved by storing the last employee ID in a log.txt file. 
* Verify Engineer's GitHub user name against GitHub API
* Allow the set up of multiple teams
* Allow assignment of intern(s) to engineer or manager
* Allow a "super manager" in case of multiple teams
* Alow the (dynamic) rendering of any number of engineers and interns. (The current state of this application takes in 2 engineers and 3 interns as the MVP for deployment.)



## Testing
* This application has been tested as part of the starter code test using Jest.js. These are tests on the `Employee`, `Manager`, `Engineer` and `Intern` classes only.



### Classes in ES6 (& beyond) for Running the Application

* As this week's class is also about ES6 (& beyond), I have coded these four classes in ES6 (i.e. use of `export default` and `import from`).
* These classes are stored in the `lib` directory and are used for running the application.

### Classes in CommonJS for JEST Testing

* I have to make minor changes to these classes in dir `lib_jest` and coded them in commonJS for Jest testing purposes. (i.e. use of `require()` and `module.exports`)
* As ES6 is yet to be fully supported in JEST [(click link)](https://jestjs.io/docs/ecmascript-modules), I have created the classes listed above in CommonJS and ensured that all tests from the starter code are passed.
* Research into making Jest to be ES6 compliant requires a lot of workarounds.
* The easiest method appears to be using Babel but I think it is beyond the scope of this assignment. 

![Jest Test results screen shots](output/jest_test.png)


## Contribution
* If you would like to contribute to this application, please contact me via
  * GitHub [https://github.com/HaveTimeDrinkTea](https://github.com/HaveTimeDrinkTea)
  * email to <havetimedrinktea@gmail.com>

