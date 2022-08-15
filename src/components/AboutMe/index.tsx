import style from "./index.module.scss";

import { Section } from "components/Section";
import { ArrowDownIcon } from "components/Icons/ArrowDownIcon";

export const AboutMe = () => {
  return (
    <Section id="aboutMe" title="ABOUT ME">
      <div className={style.container}>
        <img
          src="https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_300/v1660056581/IMG_20220805_233419_026_c3acff.jpg"
          alt="Me"
          className={style.image}
        />
        <div className={style.descriptionContainer}>
          <p className={style.description}>
            Hello !
            <br />
            I'm <strong>Evelyne PHICH</strong>.
            <br />
            I used to work in accounting for 8 years for various companies and
            in several positions, but I've always been attracted to software
            development.
            <br />
            In 2021 I felt it was the right time to set myself this challenge :
            <br />
            change path to start a new journey as a{" "}
            <strong>software engineer</strong> !
            <br />
          </p>
        </div>
      </div>
      <div className={style.scrollDownContainer}>
        <p>Scroll down to know more about me !</p>
        <div className={style.arrowDownContainer}>
          <a href="#myCareer" className={style.arrowDown}>
            <ArrowDownIcon />
          </a>
        </div>
      </div>
    </Section>
  );
};
