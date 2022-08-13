import style from "./index.module.scss";

type Props = {
  color: string;
  label: string;
};

export const Tag = ({ color, label }: Props) => {
  return (
    <div className={style.container} style={{ backgroundColor: color }}>
      {label}
    </div>
  );
};
