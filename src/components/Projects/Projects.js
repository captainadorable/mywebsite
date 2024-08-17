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
			className="flex flex-col h-screen items-center space-y-16 pt-40"
			id="projects"
			name="projects"
		>
			<div className="text-5xl text-white text-center font-poppins">
				Projects
			</div>
			<div className="grid grid-cols-4 gap-y-8 w-3/4 justify-items-center place-items-center">
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
