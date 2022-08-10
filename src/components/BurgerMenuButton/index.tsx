import style from "./index.module.scss";

type Props = {
  isBurgerMenuOpen: boolean;
};

export const BurgerMenuButton = ({ isBurgerMenuOpen }: Props) => {
  return (
    <div
      className={
        isBurgerMenuOpen
          ? `${style.burgerButton} ${style.burgerButtonClosed}`
          : style.burgerButton
      }
    >
      <div></div>
    </div>
  );
};
