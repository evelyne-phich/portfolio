import style from "./index.module.scss";

import { ReactNode } from "react";

import { Title } from "components/Title";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

export const Section = ({ id, title, children }: Props) => {
  return (
    <div id={id} className={style.section}>
      <Title>{title}</Title>
      {children}
    </div>
  );
};
