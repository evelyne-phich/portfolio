import style from "./index.module.scss";
import { ReactNode } from "react";

type Props = {
  title: string;
  position: string;
  children?: ReactNode;
};

export const CareerCard = ({ title, position, children }: Props) => {
  return (
    <div className={style.careerCard}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.position}>{position}</p>
      <ul className={style.description}>{children}</ul>
    </div>
  );
};
