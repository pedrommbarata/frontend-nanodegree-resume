
var bio = {
    "name": "Pedro Barata",
    "role": "Application Developer",
    "contacts": {
        "mobile":  "+351 919171624" ,
        "email": "pedrommbarata@gmail.com",
        "github":"pedrommbarata",
        "twitter":"@pedrommbarata",
        "location":"Lisbon, Portugal"
    },
    "welcomeMessage":"I have a passion for acquiring new knowledge and I am able to quickly understand complex problems and devise effective solutions. This allows me to efficiently work with teams and organizations, helping them to overcome challenges by developing tools which add business value.",
    "biopic": "images\\li_profile.jpg",
    "skills":["C#", ".NET","Javascript","SQL", "T-SQL", "WCF","HTML","VBA", "PowerPivots"]
};

bio.display = function(){
    var formattedHeaderName = HTMLheaderName.replace("%data%",bio.name);
    var formattedHeaderRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedHeaderName + formattedHeaderRole);

    //Display contact information
    //Contacts are displayed as li in ul
    //TOP
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    //FOOTER
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    
    var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage) 
    $("#header").append(formattedWelcomeMsg);


    //Display SKILLS
    if(bio.skills.length>0){
        //Initialize and append header
        $("#header").append(HTMLskillsStart);
    
        for (i = 0; i < bio.skills.length; i++) { 
            var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
        	$("#skills").append(formattedSkill);
        }   
    }

   
}


var work = {
jobs: [ 
    {
   "employer": "KCS iT" ,
   "employerURL": "http://en.kcsit.pt/",
   "title": "Developer",
   "location": "Lisboa, Porutgal",
   "dates" : "06/2016 - in progress",
   "description":"Solution developer."
},
{
   "employer": "MCG – Mind for Metal" ,
   "employerURL": "http://www.mcg.pt/en/",
   "title": "Planning and Production Control Manager",
   "location": "Carregado, Porutgal",
   "dates" : "11/2015 - 06/2016",
   "description":"Leading the production control team to ensure deadlines are met and devise new methods to continuously improve planning and production. Data analysis of production process bottlenecks to ensure a fine tune of the planning done at these critical points, increasing their efficiency."
},
{
   "employer": "MCG – Mind for Metal" ,
   "employerURL": "http://www.mcg.pt/en/",
   "title": "Application Developer, Data Analyst",
   "location": "Carregado, Porutgal",
   "dates" : "10/2012 - 11/2015",
   "description":"Devised effective solutions to complex problems of different areas, delivering time and cost saving, custom built applications to tight deadlines. Lead the IT department team, through several critical projects with great outcome. Thus helping the department, and team, grow and develop, resulting in a 15% increase on response."
}
]
};

work.display = function()
{
    if(work.jobs.length>0)
    {
        for (var job in work.jobs) {
            if ( work.jobs.hasOwnProperty(job)) {
                var jobItem = work.jobs[job];
                
                //Initialize and append header
                $("#workExperience").append(HTMLworkStart);
               
                var formattedEmployer = HTMLworkEmployer.replace("%data%",jobItem.employer);    
                //Add employerURL
                formattedEmployer = formattedEmployer.replace("#",jobItem.employerURL);

                var formattedTitle = HTMLworkTitle.replace("%data%",jobItem.title);
                $(".work-entry:last").append(formattedEmployer + formattedTitle);
                
                var formattedDate = HTMLworkDates.replace("%data%",jobItem.dates);
                $(".work-entry:last").append(formattedDate);
              
                var formattedLocation = HTMLworkLocation.replace("%data%",jobItem.location);
                $(".work-entry:last").append(formattedLocation);
                
                var formattedDescription = HTMLworkDescription.replace("%data%",jobItem.description);
                $(".work-entry:last").append(formattedDescription);
                
            }
        }
    }
}



var projects = {
    projects: [
        {
            "title": "Picking System",
            "dates":"01/2015 - 10/2015",
            "description":"Control of the entire shipping process. The control of the shipping process was non-existent and the projected responded to a need from the end user, optimizing the logistics' time, security and eliminating penalties.",
            "images": ""
        },
        {
            "title": "EITRI – ERP for Tooling",
            "dates":"06/2013 - 04/2014",
            "description": "Functional analysis, conception and development of a custom built ERP solution, controlling the entire manufacturing process. This led to a 50% improvement in throughput time and to a 75% reduction of manufacturing costs.",
            "images": ""
        }
    ]
};

projects.display = function(){
    if(projects.projects.length > 0)
    {
        for (var prj in projects.projects) {
                if ( projects.projects.hasOwnProperty(prj)) {
                    var project = projects.projects[prj];
                    
                    //Initialize and append header
                    $("#projects").append(HTMLprojectStart);
                    
                    var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
                    $(".project-entry:last").append(formattedTitle );
                    
                    var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
                    $(".project-entry:last").append(formattedDates );
                    
                    var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
                    $(".project-entry:last").append(formattedDescription );
                    
                    var formattedImages = HTMLprojectImage.replace("%data%",project.images);
                    $(".project-entry:last").append(formattedImages );
            }
        }
    }
}


var education = {
    "schools": [
    {
        "name":"FCT-UNL",
        "location":"Monte da Caparica, Portugal",
        "dates": "2005-2007",
        "degree": "MsC in Biomedical Engineering",
        "url":"http://www.fct.unl.pt/en"
    },
    {
        "name":"FCT-UNL",
        "location":"Monte da Caparica, Portugal",
        "dates": "2002-2005",
        "degree": "BsC in Biomedical Engineering",
        "url":"http://www.fct.unl.pt/en"
    }
    ],
    "onlineCourses" : [
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates":"06/2016",
            "url":"https://classroom.udacity.com/courses/ud804"
        },
        {
            "title": "Learn AngularJS 1.X",
            "school": "CodeAcademy",
            "dates":"06/2016",
            "url":"https://codecademy.com/learn/learn-angularjs"
        },
         {
            "title": "Learn Git",
            "school": "CodeAcademy",
            "dates":"05/2016",
            "url":"https://codecademy.com/learn/learn-git"
        }
    ]
};
education.display = function(){
    if(education.schools.length > 0)
    {
        for (var sch in education.schools) {
                if ( education.schools.hasOwnProperty(sch)) {
                    var school = education.schools[sch];
                    
                    //Initialize and append header
                    $("#education").append(HTMLschoolStart);
                    
                    var formattedName = HTMLschoolName.replace("%data%",school.name);
                    var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
                    $(".education-entry:last").append(formattedName + formattedDegree);

                    var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
                    $(".education-entry:last").append(formattedDates);

                    var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
                    $(".education-entry:last").append(formattedLocation);

                    // var formattedMajor = HTMLschoolMajor.replace("%data%","");
                    // $(".education-entry:last").append(formattedMajor);
            }
        }
    }

    if(education.onlineCourses.length > 0)
    {
         //Initialize and append header
        $("#education").append(HTMLonlineClasses);

        for(var onl in education.onlineCourses)
        {
            if ( education.onlineCourses.hasOwnProperty(onl)) {
                    var course = education.onlineCourses[onl];
                    //Use same as previous block to ensure correct formating
                    $("#education").append(HTMLschoolStart);
                    var formattedTitle = HTMLonlineTitle.replace("%data%",course.title);
                    var formattedSchool = HTMLonlineSchool.replace("%data%",course.school);
                    $(".education-entry:last").append(formattedTitle + formattedSchool);

                    var formattedDates = HTMLonlineDates.replace("%data%",course.dates);
                    $(".education-entry:last").append(formattedDates);

                    var formattedURL = HTMLonlineURL.replace("%data%",course.url);
                    formattedURL = formattedURL.replace("#",course.url);
                    $(".education-entry:last").append(formattedURL);

                    $(".education-entry:last").append(spacerDiv);
            }

        }

    }
}

function inName(_name)
{
    var iName = _name.trim();
    iName = iName.split(" ");
    console.log(iName);


    return iName;
}

//Call the display methods for all the objects
bio.display();
work.display();
projects.display();
education.display();
$("#main").append(internationalizeButton);
$("#mapDiv"). append(googleMap);