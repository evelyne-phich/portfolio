import style from "./index.module.scss";

import { AboutMe } from "components/AboutMe";
import { Navbar } from "../Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <AboutMe />
      </div>
    </>
  );
};
