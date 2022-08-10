import style from "./index.module.scss";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Text = ({ children }: Props) => {
  return <p className={style.text}>{children}</p>;
};
