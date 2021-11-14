import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
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
					title: "Pavel Almeida",
					description:
						"A passionate Web Developer and graphic designer.",
					image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
					url: "https://aitalmeida.com",
					keywords: [
						"Pavel",
						"Pavel Almeida",
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
			<Education />
			<Experience />
			{/* <Feedbacks /> */}
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