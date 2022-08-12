import { ReactNode } from "react";
import style from "./index.module.scss";

type Props = {
  stackIcon: ReactNode;
  stackName: string;
};

export const Stack = ({ stackIcon, stackName }: Props) => {
  return (
    <div className={style.container}>
      {stackIcon}
      <h2 className={style.name}>{stackName}</h2>
    </div>
  );
};
