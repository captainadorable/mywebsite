import ProjectCard from "./ProjectCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Projects() {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		const handleRequest = async () => {
			try {
				await axios({
					url: "https://api.github.com/users/captainadorable/repos?per_page=100",
					method: "get",
				}).then((response) => {
					const data = response.data;
					setRepos(data);
				});
			} catch (error) {
				console.error(error);
			}
		};

		handleRequest();
	}, []);

	return (
		<div
			className="flex flex-col md:h-screen items-center space-y-16 pt-32 mb-40 lg:mb-0 md:pt-40"
			id="projects"
			name="projects"
		>
			<div className="text-5xl dark:text-dark-t1 text-center font-righteous">
				Projects
			</div>
			<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-y-8 lg:w-9/12 justify-items-center place-items-center">
				{repos.map((repo, id) => {
					if (id < 8) {
						return (
							<ProjectCard
								key={id}
								title={repo.name}
								desc={repo.description}
								lang={repo.language}
								stars={repo.stargazers_count}
								url={repo.html_url}
							/>
						);
					}
					return id;
				})}
			</div>
		</div>
	);
}
