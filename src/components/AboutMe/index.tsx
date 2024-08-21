import style from "./index.module.scss";

import { Section } from "components/Section";
import { ArrowDownIcon } from "components/Icons/ArrowDownIcon";

export const AboutMe = () => {
  return (
    <Section id="aboutMe" title="ABOUT ME">
      <div className={style.container}>
        <img
          src="https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_400/v1724240607/IMG_2421_swtmw1.jpg"
          alt="Me"
          className={style.image}
        />
        <div className={style.descriptionContainer}>
          <p className={style.description}>
            Hello!
            <br />
            I'm <strong>Evelyne PHICH</strong>.
            <br />
            With eight years of experience in accounting, working across various
            companies and roles, I’ve always been drawn to software development.
            <br />
            In 2021, I decided it was time to challenge myself by transitioning
            into a new career as a <strong>software engineer</strong>.
            <br />
            Since then, I’ve been thriving in this dynamic field, which
            continually evolves and offers endless opportunities for learning
            and growth.
          </p>
        </div>
      </div>
      <div className={style.scrollDownContainer}>
        <p>Scroll down to know more about me!</p>
        <div className={style.arrowDownContainer}>
          <a href="#myCareer" className={style.arrowDown}>
            <ArrowDownIcon />
          </a>
        </div>
      </div>
    </Section>
  );
};
