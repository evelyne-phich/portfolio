import style from "./index.module.scss";

import { ReactNode, useRef } from "react";

import { useIsVisible } from "services/hooks";
import { Tags } from "components/Tags";
import { TagType } from "components/Tags/index.services";

type Props = {
  title: string;
  position: string;
  tags?: Array<TagType>;
  title2?: string;
  position2?: string;
  detail?: string;
  children: ReactNode;
};

export const CareerCard = ({
  title,
  position,
  tags,
  title2,
  position2,
  detail,
  children,
}: Props) => {
  const careerCardRef = useRef<HTMLDivElement>(null);

  const isVisible = useIsVisible(careerCardRef);

  return (
    <div className={style.container} ref={careerCardRef}>
      <div
        className={`${style.careerCard} ${isVisible ? style.isVisible : ""}`}
      >
        <h3 className={style.title}>{title}</h3>
        <p className={style.position}>{position}</p>
        <ul className={style.description}>{children}</ul>
        {tags && <Tags tags={tags} />}
        {title2 && (
          <h3 className={`${style.title} ${style.withSpacing}`}>{title2}</h3>
        )}
        {position2 && <p className={style.position}>{position2}</p>}
        {detail && <p className={style.detail}>{detail}</p>}
      </div>
    </div>
  );
};
