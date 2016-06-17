
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
    "biopic": "images\fry.jpg",
    "skills":["C#", ".NET","SQL", "T-SQL", "WCF","HTML","Javascript"]
};


var work= {
jobs: [ 
{
   "employer": "MCG – Mind for Metal" ,
   "title": "Planning and Production Control Manager",
   "location": "Carregado, Porutgal",
   "startDate" : 01/11/2015,
   "endDate" : 10/06/2016,
   "description":"Leading the production control team to ensure deadlines are met and devise new methods to continuously improve planning and production. Data analysis of production process bottlenecks to ensure a fine tune of the planning done at these critical points, increasing their efficiency."
},
{
   "employer": "MCG – Mind for Metal" ,
   "title": "Application Developer, Data Analyst",
   "location": "Carregado, Porutgal",
   "startDate" : 01/10/2012,
   "endDate" : 01/11/2015,
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
                var element = work.jobs[job];
                
                //Initialize and append header
                $("#workExperience").append(HTMLworkStart);
               
                var formattedEmployer = HTMLworkEmployer.replace("%data%",element.employer);
                var formattedTitle = HTMLworkTitle.replace("%data%",element.title);
                $(".work-entry:last").append(formattedEmployer + formattedTitle);
                
                var formattedDate = HTMLworkDates.replace("%data%",element.startDate);
                $(".work-entry:last").append(formattedDate);
              
                var formattedLocation = HTMLworkLocation.replace("%data%",element.location);
                $(".work-entry:last").append(formattedLocation);
                
                var formattedDescription = HTMLworkDescription.replace("%data%",element.description);
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

projects.display = function()
{
    if(projects.projects.length > 0)
    {
        for (var prj in projects.projects) {
                if ( projects.projects.hasOwnProperty(prj)) {
                    var project = projects.projects[prj];
                    
                    //Initialize and append header
                    $("#projects").append(HTMLprojectStart);
                    
                    var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
                    $(".project-entry:last").append(formattedTitle );
                    
                    var formattedDates = HTMLprojectTitle.replace("%data%",project.dates);
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
        "degree": "MsC in Biomedical Engineering",
        "url":"http://www.fct.unl.pt/en"
    },
    {
        "name":"FCT-UNL",
        "location":"Monte da Caparica, Portugal",
        "degree": "BsC in Biomedical Engineering",
        "url":"http://www.fct.unl.pt/en"
    }
    ],
    "onlineCourses" : [
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "startDate":"",
            "endDate":""
        }
    ]
};

var formattedHeaderName = HTMLheaderName.replace("%data%",bio.name);
var formatedHeaderRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedHeaderName + formatedHeaderRole);

if(bio.skills.length>0){
    $("#header").append(HTMLskillsStart);
    
    var formatedSkill = "";
    for (i = 0; i < bio.skills.length; i++) { 
        formatedSkill = HTMLskills.replace("%data%",bio.skills[i]);
         $("#skills").append(formatedSkill);
    }
}






//Call the display methods for all the objects
$("#main").append(internationalizeButton);
work.display();
projects.display();
$("#mapDiv"). append(googleMap);