// creates the team


const generateTeam = team => {

    // creates the manager html
    const generateManager = manager => {
        return `
        <!-- ======Mgr Row======== -->

        <div class="row">
            <div class="card employee-card col-12 center">
                <div class="card-header">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.getId()}<</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="list-group-item">Office extension: ${manager.getOfficeNumber()}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row">                
        `;
    };

    // creates the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card col-6 center">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>
        `;
    };

    // creates the html for interns
    const generateIntern = intern => {
        return `     
        <!-- Intern 1 -->
        <div class="card employee-card col-4 center">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>
            </div>    
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(`         </div>
                        <div class="row">
                        `
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// exports function to generate entire page
// module.exports = team => {

export default function render(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Super Duper Team</title>
    
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />  
    
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    
           <!-- get bootstrap css -->
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
    
        <link rel="icon" type="image/x-icon" href="assets/images/favicon.ico" />
    
        <!-- My own CSS -->
        <link rel="stylesheet" href="css/myfavcolours.css">
        <link rel="stylesheet" href="css/style.css">
    </head>
    
    <body>
        <header class="container">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Super Duper Team</h1>
                </div>
            </div>
        </header>
        <main class="container">
            <section class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    <!-- INSERT TEAM INFO-->
                    <!-- ============== -->
                    <section class="container">


                        ${generateTeam(team)}

                    </div>
            <!-- ============== -->
            <!-- END INSERT TEAM INFO-->
                </section>                
            </div>
        </section>
    </main>

    <footer class="container">
        <div class="row">
           <div class="col-sm-12 footer">
              <nav>
                 <ul id="footerNav">
                    <li><a href="mailto:havetimedrinktea@gmail.com" alt="Click this icon to email Pei Wang" title="email Pei Wang"><i class="fa fa-envelope-open" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.github.com/havetimedrinktea/" alt="Click this icon to visit Pei Wang's Github page." title="Visit Pei Wang's GitHub page" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/teanamu" alt="Click this icon to visit Pei Wang's LinkedIn profile." target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.facebook.com/havetimedrinktea/" alt="Click this icon to visit Pei Wang's Facebook feed." title="Pei's facebook page" target="_blank"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
                 </ul>
              </nav>
              <div class="footerTags">
                 <i class="fa fa-leaf" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp; #HaveTimeDrinkTea &nbsp;&nbsp;&nbsp; <i class="fa fa-heart" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp; #Kindfulness &nbsp;&nbsp;&nbsp; <i class="fa fa-coffee aria-hidden="true"></i> &nbsp;&nbsp;&nbsp; #TeahouseStirrings
              </div>
              
              <div class="footerP">
                 made with many hours and with many <i class="fa fa-coffee" aria-hidden="true"></i> of tea!
              </div>
              
              <div class="footerCopyright">
                 <strong><i class="fa fa-copyright" aria-hidden="true"></i> 2023 PEI WANG</strong>
              </div>
           </div>
        </div>     
     </footer>
  
</body>
</html>
    `;
};