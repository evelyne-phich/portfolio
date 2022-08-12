import style from "./index.module.scss";

import { ReactNode } from "react";

import { LaunchIcon } from "components/Icons/LaunchIcon";
import { GitHubIcon } from "components/Icons/GitHubIcon";

type Props = {
  icon: ReactNode;
  title: string;
  date: string;
  description: string;
  projectLink: string;
  gitHubLink: string;
};

export const ProjectCard = ({
  icon,
  title,
  date,
  description,
  projectLink,
  gitHubLink,
}: Props) => {
  return (
    <div className={style.projectCard}>
      {icon}
      <h3 className={style.title}>{title}</h3>
      <p className={style.date}>{date}</p>
      <p className={style.description}>{description}</p>
      <div className={style.links}>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <LaunchIcon />
        </a>
        <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};
