import { ReactNode } from "react";
import style from "./index.module.scss";

type Props = {
  stackIcon: ReactNode;
  stackName: string;
};

export const Stack = ({ stackIcon, stackName }: Props) => {
  return (
    <div className={style.container}>
      <div className={style.icon}>{stackIcon}</div>
      <h2>{stackName}</h2>
    </div>
  );
};
