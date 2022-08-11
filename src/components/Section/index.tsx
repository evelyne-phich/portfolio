import style from "./index.module.scss";

import { ReactNode } from "react";

import { Title } from "components/Title";

type Props = {
  id: string;
  title: string;
  backgroundColor?: boolean;
  children: ReactNode;
};

export const Section = ({ id, title, backgroundColor, children }: Props) => {
  return (
    <div
      id={id}
      className={
        backgroundColor
          ? `${style.section} ${style.backgroundColor}`
          : style.section
      }
    >
      <Title>{title}</Title>
      {children}
    </div>
  );
};
