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
        <CareerCard title="LCL" position="Accountant analyst">
          <li>Inventory entries and corrections</li>
          <li>
            Monthly closing with analysis of variations (results/balance sheet)
          </li>
          <li>Accounting control and accounts justification</li>
          <li>Contribution to IFRS16 accounting and regulatory project</li>
        </CareerCard>
        <h2 className={style.date}>09/2019</h2>
        <CareerCard title="Fiducial Expertise" position="Accountant">
          <li>Management of a portfolio of about thirty clients</li>
          <li>Bookkeeping and tax declarations</li>
          <li>Establishment of annual accounts and tax returns</li>
          <li>Establishment of intermediate statements and forecasts</li>
          <li>Personal income tax declarations</li>
        </CareerCard>
        <h2 className={style.date}>10/2017</h2>
        <CareerCard title="Groupe Y Nexia" position="Accounting assistant">
          <li>Bookkeeping and tax declarations</li>
          <li>Establishment of annual accounts and tax returns</li>
        </CareerCard>
        <h2 className={style.date}>11/2016</h2>
        <h2 className={style.date}>08/2016</h2>
        <CareerCard
          title="Société Générale"
          position="Business controller"
          title2="IAE Gustave Eiffel"
          position2={`"Comptabilité, Contrôle, Audit" Master's degree (apprenticeship)`}
          detail="with high honours"
        >
          <li>Monitoring of general expenses and internal invoicing</li>
          <li>Contribution to monthly closings</li>
          <li>
            Contribution to the establishment of quarterly estimates and the
            annual budget
          </li>
        </CareerCard>
        <h2 className={style.date}>09/2014</h2>
        <CareerCard
          title="Siemens"
          position="Credit manager"
          title2="IAE Gustave Eiffel"
          position2={`"Comptabilité, Contrôle, Audit" Bachelor's degree (apprenticeship)`}
          detail="with high honours"
        >
          <li>Management and analysis of a portfolio of customer accounts</li>
          <li>
            Contribution to collection and improvement of the DSO (Days Sales
            Outstanding)
          </li>
          <li>Monitoring of disputes and management of check deposit</li>
        </CareerCard>
      </div>
    </Section>
  );
};
