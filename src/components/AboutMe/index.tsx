import style from "./index.module.scss";

import { Title } from "components/Title";
import { Text } from "components/Text";
import { ArrowDown } from "components/Icons/ArrowDown";

export const AboutMe = () => {
  return (
    <>
      <Title>ABOUT ME</Title>
      <img
        src="https://res.cloudinary.com/dvpcjyb48/image/upload/c_scale,w_300/v1660056581/IMG_20220805_233419_026_c3acff.jpg"
        alt="Me"
        className={style.image}
      />
      <Text>
        Hello !
        <br />I am <strong>Evelyne PHICH</strong>.
        <br />
        I used to work in accounting for 8 years, until mid 2021, when I decided
        to change path and start a new life as a software engineer.
        <br />
        If you're interested to know more about me, I invite you to scroll down.
        🙂
      </Text>
      <div className={style.doubleArrowDown}>
        <ArrowDown />
      </div>
    </>
  );
};
