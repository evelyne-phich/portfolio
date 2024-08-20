import style from "./index.module.scss";

type Props = {
  label: string;
  backgroundColor: string;
  color?: string;
};

export const Tag = ({ label, backgroundColor, color }: Props) => {
  return (
    <div className={style.container} style={{ backgroundColor, color }}>
      {label}
    </div>
  );
};
