import { ReactNode } from "react";
import style from "./index.module.scss";

type Props = {
  children: ReactNode;
};

export const Title = ({ children }: Props) => {
  return <h1 className={style.title}>{children}</h1>;
};
