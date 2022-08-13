import style from "./index.module.scss";

import { ReactNode } from "react";

import { LaunchIcon } from "components/Icons/LaunchIcon";
import { GitHubIcon } from "components/Icons/GitHubIcon";
import { Tags } from "components/Tags";
import { TagType } from "components/Tags/index.services";

type Props = {
  icon: ReactNode;
  title: string;
  date: string;
  description: string;
  projectLink: string;
  gitHubLink: string;
  tags: Array<TagType>;
};

export const ProjectCard = ({
  icon,
  title,
  date,
  description,
  projectLink,
  gitHubLink,
  tags,
}: Props) => {
  return (
    <div className={style.projectCard}>
      {icon}
      <h2 className={style.title}>{title}</h2>
      <h3 className={style.date}>{date}</h3>
      <p className={style.description}>{description}</p>
      <Tags tags={tags} />
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
