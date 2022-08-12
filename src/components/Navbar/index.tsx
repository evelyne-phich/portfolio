import style from "./index.module.scss";

import { useState } from "react";

import { BurgerMenuButton } from "components/BurgerMenuButton";

export const Navbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className={style.navbar}>
        <a href="#aboutMe" className={style.title}>
          Evelyne PHICH
        </a>
        <div className={style.desktopMenu}>
          <a href="#aboutMe" className={style.menuItem}>
            ABOUT ME
          </a>
          <a href="#myCareer" className={style.menuItem}>
            MY CAREER
          </a>
          <a href="#myProjects" className={style.menuItem}>
            MY PROJECTS
          </a>
          <a href="#myStack" className={style.menuItem}>
            MY STACK
          </a>
          <a href="#contactMe" className={style.menuItem}>
            CONTACT ME
          </a>
        </div>
        <div
          className={style.mobileMenu}
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        >
          <BurgerMenuButton isBurgerMenuOpen={isBurgerMenuOpen} />
        </div>
      </nav>
      <nav className={isBurgerMenuOpen ? style.menuOpen : style.menuClosed}>
        <a
          href="#aboutMe"
          className={style.menuItem}
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        >
          ABOUT ME
        </a>
        <a
          href="#myCareer"
          className={style.menuItem}
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        >
          MY CAREER
        </a>
        <a
          href="#myProjects"
          className={style.menuItem}
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        >
          MY PROJECTS
        </a>
        <a
          href="#myStack"
          className={style.menuItem}
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        >
          MY STACK
        </a>
        <a
          href="#contactMe"
          className={style.menuItem}
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        >
          CONTACT ME
        </a>
      </nav>
      {isBurgerMenuOpen && (
        <div
          className={style.closeMenuDiv}
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        ></div>
      )}
    </>
  );
};
