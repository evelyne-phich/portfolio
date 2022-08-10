import style from "./index.module.scss";

import { useState } from "react";
import { BurgerMenuButton } from "components/BurgerMenuButton";

export const Navbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.title}>Evelyne PHICH</div>
        <div className={style.desktopMenu}>
          <div className={style.menuItem}>ABOUT ME</div>
          <div className={style.menuItem}>MY CAREER</div>
          <div className={style.menuItem}>MY PROJECTS</div>
          <div className={style.menuItem}>MY STACK</div>
          <div className={style.menuItem}>CONTACT ME</div>
        </div>
        <div
          className={style.mobileMenu}
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        >
          <BurgerMenuButton isBurgerMenuOpen={isBurgerMenuOpen} />
        </div>
      </nav>
      <nav className={isBurgerMenuOpen ? style.menuOpen : style.menuClosed}>
        <div className={style.menuItem}>ABOUT ME</div>
        <div className={style.menuItem}>MY CAREER</div>
        <div className={style.menuItem}>MY PROJECTS</div>
        <div className={style.menuItem}>MY STACK</div>
        <div className={style.menuItem}>CONTACT ME</div>
      </nav>
    </>
  );
};
