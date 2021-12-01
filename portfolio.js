import emoji from "react-easy-emoji";

export const greetings = {
	name: "Pavel Almeida",
	title: "Hi all, I'm Pavel 👋",
	description:
		"Passionate about new technologies from a young age, I use my programming and design skills to create attractive user interfaces and websites. 'm also doing graphic design (go to my behance page or my telegram channel to see my conceptions) Wanna know more 😏? https://t.me/aitalmeida",
	resumeLink: "",
};

export const openSource = {
	githubUserName: "Shado2107",
};

export const contact = {
	telephone : "+228 99 75 23 27",
	mail: "romalmeida21@gmail",
	picture: "/img/pavel1.png",
	location: "Lomé-TOGO"
};

export const socialLinks = {
	facebook: "https://www.facebook.com/pavel.dalmeida/",
	instagram: "https://www.instagram.com/ait_almeida/",
	twitter: "https://twitter.com/almeidapavel",
	github: "https://github.com/Shado2107",
	linkedin: "https://www.linkedin.com/in/a-pavel-romanus-d-almeida-62b393174/",
	behance: "https://www.behance.net/dalmeidaromano",
};

export const skillsSection = {
	title: "Get to know me 😄 ",
	subTitle:
		" Some of my skills:  ",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		// {
		// 	skillName: "TypeScript",
		// 	fontAwesomeClassname: "logos:typescript-icon",
		// },
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		// {
		// 	skillName: "flutter",
		// 	fontAwesomeClassname: "logos:flutter",
		// },
		// {
		// 	skillName: "swift",
		// 	fontAwesomeClassname: "vscode-icons:file-type-swift",
		// },
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		// {
		// 	skillName: "mongoDB",
		// 	fontAwesomeClassname: "vscode-icons:file-type-mongo",
		// },
		// {
		// 	skillName: "aws",
		// 	fontAwesomeClassname: "logos:aws",
		// },
		// {
		// 	skillName: "firebase",
		// 	fontAwesomeClassname: "logos:firebase",
		// },
		// {
		// 	skillName: "python",
		// 	fontAwesomeClassname: "logos:python",
		// },
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "laravel",
			fontAwesomeClassname: "logos:laravel",
		},
		{
			skillName: "wordpress",
			fontAwesomeClassname: "logos:wordpress",
		},
		// {
		// 	skillName: "docker",
		// 	fontAwesomeClassname: "logos:docker-icon",
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

// export const servicesInfo = [
// 	{
// 		schoolName: "Supdeco",
// 		subHeader: "Bachelor in computer science",
// 		duration: "Octobre 2016 - Octobre 2019",
// 		desc: "Participated in the research of XXX and published 3 papers.",
// 		descBullets: [
// 			"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
// 		],
// 	},
// 	{
// 		schoolName: "IAI Togo",
// 		subHeader: "Master of Science in Computer Science",
// 		duration: "September 2017 - April 2019",
// 		desc: "Participated in the research of XXX and published 3 papers.",
// 		descBullets: [
// 			"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
// 		],
// 	},
// 	{
// 		schoolName: "College NDE Vakpo",
// 		subHeader: "Bachelor of Science in Computer Science",
// 		duration: "September 2013 - April 2017",
// 		desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
// 		descBullets: [
// 			"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
// 		],
// 	},
// ];

export const experience = [
	{
		role: "Software Engineer",
		company: "DCN Technology",
		companylogo: "/img/icons/common/google.svg",
		date: "June 2018 – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		role: "Front-End Developer",
		company: "New world tv",
		companylogo: "/img/icons/common/github.svg",
		date: "May 2017 – May 2018",
		desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		role: "Software Engineer Intern",
		company: "Creazione Studio",
		companylogo: "/img/icons/common/airbnbLogo.png",
		date: "Jan 2015 – Sep 2015",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export const projects = [
	{
		name: "TMovies",
		desc: "Site web de presentation des films réalisé avec reactjs et relié à lapi imdb",
		link: "https://shado2107.github.io/moviesapp_react/",
		github: "https://github.com/Shado2107/moviesapp_react",
	},
	{
		name: "Twitter clone",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/",
		link: "https://example.com",
	},
	{
		name: "WhatsappUI",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/Shado2107/whastappUI",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];

export const graphics = [
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "https://example.com",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/",
		link: "https://example.com",
	},
];

export const servicesInfo = [
	{
		name: "Web developement",
		desc: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
	},
	{
		name: "Graphic Design",
		desc: " I value simple content structure, clean design patterns, and thoughtful interactions. I enjoy designing: UX, UI, Web, Mobile, Apps, Logos",
	},
	{
		name: "UI/UX Design",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/",
		link: "https://example.com",
	},
];
