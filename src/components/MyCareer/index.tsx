import style from "./index.module.scss";

import { CareerCard } from "components/CareerCard";
import { Section } from "components/Section";

export const MyCareer = () => {
  return (
    <Section id="myCareer" title="MY CAREER" backgroundColor>
      <div className={style.container}>
        <div className={style.timeline}></div>
        <h2 className={style.date}>Present</h2>
        <CareerCard title="Dalma" position="Frontend engineer">
          <li>Conception and implementation of features</li>
          <li>Testing and deployment</li>
          <li>Documentation and maintenance</li>
          <li>Features priorization and release following Scrum method</li>
        </CareerCard>
        <h2 className={style.date}>03/2022</h2>
        <CareerCard
          title="O'clock"
          position="JavaScript fullstack developer course"
        >
          <li>
            3 months of foundation :
            <br />
            HTML - CSS - JavaScript - Node.js - Express - EJS - Postgres - Git -
            Agile method - deployment
          </li>
          <li>
            1 month of specialization :
            <br />
            React
          </li>
          <li>
            1 month of team project with 5 people :
            <br />
            <strong>O'My Plant</strong> - web application helping to handle
            plant care
            <br />
            <a
              href="https://www.youtube.com/watch?v=RRj8BAjRi9I"
              target="_blank"
              rel="noopener noreferrer"
              className={style.link}
            >
              Project's introduction live on YouTube (25:20 to 39:50)
            </a>
          </li>
        </CareerCard>
        <h2 className={style.date}>08/2021</h2>
        <h2 className={style.date}>06/2021</h2>
        <CareerCard title="LCL" position="Accountant analyst" />
      </div>
    </Section>
  );
};
