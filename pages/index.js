import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Services = dynamic(() => import("../containers/Services"));
// const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
// const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
// const Graphics = dynamic(() => import("../containers/Graphics"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Pavel Almeida| Passionate web developer",
					description:
						"A passionate Web Developer and graphic designer.",
					image: "https://avatars.githubusercontent.com/u/45469186?v=4", 
					url: "https://aitalmeida.com",
					keywords: [
						"Pavel",
						"Pavel Almeida",
						"Pavel Romanus Almeida",
						"@Shado2107",
						"Shado2107",
						"Portfolio",
						"Pavel Portfolio ",
						"Pavel Almeida Portfolio",
						"web developer",
						"Front end",
						"front end web developer",
						"Graphic designer",
						"ui/ux",
						"php",
						"Laravel",
						"photoshop",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"illustrator",
						"redux",
						"adobe xd",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Services />
			{/* <Experience /> */}
			{/* <Feedbacks /> */}
			{/* <Graphics /> */}
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
