import ProjectCard from "./ProjectCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  //'Authorization: bearer ' --data-raw '""
  useEffect(() => {
    const handleRequest = async () => {
      try {
        await axios({
          url: "/api/github",
          method: "get",
        }).then((response) => {
          const data = response.data.data;
          setRepos(data.user.pinnedItems.nodes);
        });
      } catch (error) {
        console.error(error);
      }
    };

    handleRequest();
  }, []);

  return (
    <div
      className="flex flex-col items-center space-y-16 pt-32 md:pt-40 mb-24"
      id="projects"
      name="projects"
    >
      <div className="text-5xl dark:text-dark-t1 text-center font-righteous">
        Projects
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:w-9/12 justify-items-center place-items-center">
        {repos.map((repo, id) => {
          if (id < 8) {
            return (
              <ProjectCard
                key={id}
                title={repo.name}
                desc={repo.description ? repo.description.slice(0, 60) + "..." : ""}
                lang={repo.primaryLanguage.name}
                langColor={repo.primaryLanguage.color}
                stars={repo.stargazerCount}
                url={repo.url}
              />
            );
          }
          return id;
        })}
      </div>
    </div>
  );
}
