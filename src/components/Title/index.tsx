import style from "./index.module.scss";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Title = ({ children }: Props) => {
  return <h1 className={style.title}>{children}</h1>;
};
