import style from "./index.module.scss";

import { ReactNode, useEffect, useRef, useState } from "react";

const options = { root: null, rootMargin: "0px", threshold: 1 };

type Props = {
  title: string;
  position: string;
  title2?: string;
  position2?: string;
  detail?: string;
  children: ReactNode;
};

export const CareerCard = ({
  title,
  position,
  title2,
  position2,
  detail,
  children,
}: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const startAnimation: IntersectionObserverCallback = (entries) => {
    setIsVisible(entries[0].isIntersecting);
  };

  const careerCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(startAnimation, options);

    if (careerCardRef.current) {
      observer.observe(careerCardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={style.container} ref={careerCardRef}>
      <div
        className={`${style.careerCard} ${isVisible ? style.isVisible : ""}`}
      >
        <h3 className={style.title}>{title}</h3>
        <p className={style.position}>{position}</p>
        <ul className={style.description}>{children}</ul>
        {title2 && (
          <h3 className={`${style.title} ${style.withSpacing}`}>{title2}</h3>
        )}
        {position2 && <p className={style.position}>{position2}</p>}
        {detail && <p className={style.detail}>{detail}</p>}
      </div>
    </div>
  );
};
