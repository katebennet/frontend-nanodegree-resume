function prependToHeader(html, info) {
	var formatted = html.replace("%data%", info);
	$("#header").prepend(formatted);
}

function insertAndAppend(html_template, data, tag) {
	var formatted = html_template.replace("%data%", data);
	$(tag).append(formatted);
}

function appendToHeader(html, info) {
	insertAndAppend(html, info, "#header");
}

function appendToContacts(html, info) {
	insertAndAppend(html, info, "#topContacts");
	insertAndAppend(html, info, "#footerContacts");
}

var bio = {
	"name" : "Kate Bennet",
	"role" : "Web developer",
	"bioPic" : "images/kate.jpg",
	"welcomeMessage" : "Bacon ipsum dolor amet laborum cow pork belly pig brisket in. Ullamco ut bresaola chicken. Boudin strip steak veniam incididunt short ribs ut. Consequat do biltong, magna in ad voluptate. Magna sunt beef ribs doner spare ribs bacon nostrud anim cow fugiat sausage. Sausage spare ribs ham hock turducken pork belly in short ribs est sunt ex laboris ball tip reprehenderit brisket. Picanha proident turducken aliqua boudin. Consequat brisket ipsum, picanha short ribs leberkas t-bone spare ribs incididunt shankle sunt biltong non. T-bone landjaeger tenderloin shoulder in, tri-tip deserunt aute exercitation anim velit laboris. Shankle pork qui fugiat, nisi capicola fatback turkey.",
	"location" : "San Francisco, California",
	"skills" : ["coding", "collaborating", "hiking", "eating"],
	"contacts": {
		"email" : "hello@katebennet.com",
		"twitter" : "@katebennet",
		"github" : "www.github.com/katebennet"
	},
	display: function() {
		prependToHeader(HTMLheaderRole, bio.role);
		prependToHeader(HTMLheaderName, bio.name);
		appendToHeader(HTMLbioPic, bio.bioPic);
		appendToHeader(HTMLwelcomeMsg, bio.welcomeMessage);
		appendToContacts(HTMLemail, bio.contacts.email);
		appendToContacts(HTMLgithub, bio.contacts.github);
		appendToContacts(HTMLtwitter, bio.contacts.twitter);
		appendToContacts(HTMLlocation, bio.location);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			insertAndAppend(HTMLskills, bio.skills[0], "#skills");
			insertAndAppend(HTMLskills, bio.skills[1], "#skills");
			insertAndAppend(HTMLskills, bio.skills[2], "#skills");
			insertAndAppend(HTMLskills, bio.skills[3], "#skills");
		}
	}
};

var education = {
	"schools": [
		{
		"name": "Haas School of Business",
		"degree": "Certificate",
		"location": "Berkeley, California",
		"dates": "2015- 2015",
		"major": "High impact leadership",
		"url": "http://executive.berkeley.edu/programs/high-impact-leadership"
		},
		{
		"name": "University of Warwick",
		"degree": "BA",
		"location": "Coventry, UK",
		"dates": "2004- 2007",
		"major": "History and Politics",
		"url": "http://www2.warwick.ac.uk"
		}
	],
	"onlineCourses": [
		{
		"title": "Udacity Frontend Nanodegree",
		"school": "Udacity",
		"dates": "2015- present day",
		"url": "https://www.udacity.com"
		}
	],
	display: function() {
		for (var school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolTitle = formattedSchoolName + formattedDegree;
			$(".education-entry:last").append(formattedSchoolTitle);

			insertAndAppend(HTMLschoolDates, education.schools[school].dates, ".education-entry:last");
			insertAndAppend(HTMLschoolLocation, education.schools[school].location, ".education-entry:last");
			insertAndAppend(HTMLschoolMajor, education.schools[school].major, ".education-entry:last");
		}
		for (var onlineSchool in education.onlineCourses) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineSchool].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineSchool].school);
			var formattedOnlineName = formattedOnlineTitle + formattedOnlineSchool;
			$(".education-entry:last").append(formattedOnlineName);

			insertAndAppend(HTMLonlineDates, education.onlineCourses[onlineSchool].dates, ".education-entry:last");
			insertAndAppend(HTMLonlineURL, education.onlineCourses[onlineSchool].url, ".education-entry:last");
		}
	}
};

var work = {
	"jobs": [
		{
		"employer": "Mindjet",
		"title": "Head of Product",
		"location": "San Francisco, California",
		"dates": "2013- 2015",
		"description": "Head of Product for an innovation software company with revenues of $25m/ year."
	},
	{
		"employer": "Spigit",
		"title": "Director of Product",
		"location": "London, UK",
		"dates": "2011- 2013",
		"description": "Director of Product, working with large enterprises such as Cisco and AT&T."
	},
		{
		"employer": "UK Government",
		"title": "Innovation Manager",
		"location": "Manchester, UK",
		"dates": "2010- 2011",
		"description": "Innovation Manager in the UK Government."
	}
	],
	display: function() {
		for (var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			insertAndAppend(HTMLworkLocation, work.jobs[job].location, ".work-entry:last");

			insertAndAppend(HTMLworkDates, work.jobs[job].dates, ".work-entry:last");

			insertAndAppend(HTMLworkDescription, work.jobs[job].description, ".work-entry:last");
		}
	}
};

//Projects data and function to display the data on the page.

var projects = {
	"projects":[
		{
		"title": "Udacity project 1",
		"dates": "2015",
		"description": "HTML and CSS.",
		"images": [
			"http://placehold.it/350x150",
			"http://placehold.it/350x150",
			"http://placehold.it/350x150"
			]
		}
	],
	display: function() {
		for (var project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			insertAndAppend(HTMLprojectTitle, projects.projects[project].title, ".project-entry:last");
			insertAndAppend(HTMLprojectDates, projects.projects[project].dates, ".project-entry:last");
			insertAndAppend(HTMLprojectDescription, projects.projects[project].description, ".project-entry:last");

			if (projects.projects[project].images.length > 0) {
				for (var image in projects.projects[project].images) {
					insertAndAppend(HTMLprojectImage, projects.projects[project].images[image], ".project-entry:last");
				}
			}
		}
	}
};

//Calling the functions.

bio.display();
work.display();
projects.display();
education.display();

//Adds Google Maps to the page.

$("#mapDiv").append(googleMap);

//Click logging.

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});

//Internationalize button to capitalize the surname.

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);