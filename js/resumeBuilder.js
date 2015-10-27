function prependToHeader(html, info) {
	var formatted = html.replace("%data%", info);
	$("#header").prepend(formatted);
}

function appendToHeader(html, info) {
	var formatted = html.replace("%data%", info);
	$("#header").append(formatted);
}

function appendToContacts(html, info) {
  var formatted = html.replace("%data%", info);
  $("#topContacts").append(formatted);
  $("#footerContacts").append(formatted);
}


var bio = {
	"name" : "Kate Bennet",
	"role" : "Web developer",
	"contacts": {
		"email" : "hello@katebennet.com",
		"twitter" : "@katebennet",
		"github" : "www.github.com/katebennet"
	},
	"bioPic" : "images/kate.jpg",
	"welcomeMessage" : "Hello and welcome to my resume",
	"location" : "San Francisco, California",
	"skills" : ["coding", "collaborating", "hiking", "eating"],
	display: function() {
		prependToHeader(HTMLheaderRole, bio.role);
		prependToHeader(HTMLheaderName, bio.name);
		appendToContacts(HTMLemail, bio.contacts.email);
		appendToContacts(HTMLgithub, bio.contacts.github);
		appendToContacts(HTMLtwitter, bio.contacts.twitter);
		appendToContacts(HTMLlocation, bio.location);
		appendToHeader(HTMLbioPic, bio.bioPic);
		appendToHeader(HTMLwelcomeMsg, bio.welcomeMessage);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
		}
	}
};

var education = {
	"schools": [
		{
		"name": "Haas School of Business",
		"location": "Berkeley, California",
		"degree": "High impact leadership",
		"dates": "2015",
		"major": "Leadership",
		"url": "http://executive.berkeley.edu/programs/high-impact-leadership"
		},
		{
		"name": "University of Warwick",
		"location": "Coventry, UK",
		"degree": "History and Politics",
		"dates": "2007",
		"major": "Politics",
		"url": "http://www2.warwick.ac.uk"
		}
	],
	"onlineCourses": [
		{
		"title": "Udacity Frontend Nanodegree",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com"
		}
	],
	display: function() {
		for (var school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedSchoolName);

			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);

			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);
		}
		for (var onlineSchool in education.onlineCourses) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineSchool].title);
			$(".education-entry:last").append(formattedOnlineTitle);

			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineSchool].school);
			$(".education-entry:last").append(formattedOnlineSchool);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineSchool].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineSchool].url);
			$(".education-entry:last").append(formattedOnlineURL);
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

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
	"projects":[
		{
		"title": "Udacity project 1",
		"dates": "2015",
		"description": "HTML and CSS.",
		"images": [
			"http://placehold.it/350x150",
			"http://placehold.it/350x150"
			]
		}
	],
	display: function() {
		for (var project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedProjectDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (var image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);