import style from "./index.module.scss";

import { Section } from "components/Section";
import { EmailIcon } from "components/Icons/EmailIcon";
import { LinkedInIcon } from "components/Icons/LinkedInIcon";
import { GitHubIcon } from "components/Icons/GitHubIcon";

export const ContactMe = () => {
  return (
    <Section id="contactMe" title="CONTACT ME">
      <div className={style.container}>
        <a href="mailto:evelyne.phich@gmail.com">
          <EmailIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/evelynephich/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/evelyne-phich"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon width={50} height={50} />
        </a>
      </div>
    </Section>
  );
};
