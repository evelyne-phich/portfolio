import style from "./index.module.scss";

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.title}>Evelyne PHICH</div>
      <div className={style.menu}>
        <div className={style.menuItem}>ABOUT ME</div>
        <div className={style.menuItem}>MY CAREER</div>
        <div className={style.menuItem}>MY PROJECTS</div>
        <div className={style.menuItem}>MY STACK</div>
        <div className={style.menuItem}>CONTACT ME</div>
      </div>
    </nav>
  );
};
