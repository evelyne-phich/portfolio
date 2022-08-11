import style from "./index.module.scss";

import { Section } from "components/Section";
import { Text } from "components/Text";
import { ArrowDown } from "components/Icons/ArrowDown";

export const AboutMe = () => {
  return (
    <Section id="aboutMe" title="ABOUT ME">
      <img
        src="https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_300/v1660056581/IMG_20220805_233419_026_c3acff.jpg"
        alt="Me"
        className={style.image}
      />
      <Text>
        Hello !
        <br />
        I'm <strong>Evelyne PHICH</strong>.
        <br />
        I used to work in accounting for 8 years for various companies and in
        several positions, but I've always been attracted to software
        development.
        <br />
        In 2021 I felt it was the right time to set myself this challenge :
        <br />
        changing path and starting a new journey as a software engineer.
        <br />
      </Text>
      <div className={style.scrollDownContainer}>
        <Text>Scroll down to know more about me !</Text>
        <div className={style.arrowDownContainer}>
          <div className={style.arrowDown}>
            <ArrowDown />
          </div>
        </div>
      </div>
    </Section>
  );
};
