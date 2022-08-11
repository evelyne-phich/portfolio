import style from "./index.module.scss";

import { Section } from "components/Section";

export const MyProjects = () => {
  return (
    <Section id="myProjects" title="MY PROJECTS">
      <div className={style.projects}></div>
    </Section>
  );
};
