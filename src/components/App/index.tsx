import { Navbar } from "components/Navbar";
import { AboutMe } from "components/AboutMe";
import { MyCareer } from "components/MyCareer";
import { MyProjects } from "components/MyProjects";
import { MyStack } from "components/MyStack";
import { ContactMe } from "components/ContactMe";

export const App = () => {
  return (
    <>
      <Navbar />
      <AboutMe />
      <MyCareer />
      <MyProjects />
      <MyStack />
      <ContactMe />
    </>
  );
};
