import style from "./index.module.scss";
import { ReactNode } from "react";

type Props = {
  title: string;
  position: string;
  title2?: string;
  position2?: string;
  detail?: string;
  children?: ReactNode;
};

export const CareerCard = ({
  title,
  position,
  title2,
  position2,
  detail,
  children,
}: Props) => {
  return (
    <div className={style.careerCard}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.position}>{position}</p>
      <ul className={style.description}>{children}</ul>
      <h3 className={style.title}>{title2}</h3>
      <p className={style.position}>{position2}</p>
      <p className={style.detail}>{detail}</p>
    </div>
  );
};
