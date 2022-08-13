import style from "./index.module.scss";

import { projects } from "./index.services";

import { Section } from "components/Section";
import { ProjectCard } from "components/ProjectCard";

export const MyProjects = () => {
  return (
    <Section id="myProjects" title="MY PROJECTS">
      <div className={style.container}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};
