import { RefObject, useEffect, useState } from "react";

export const useIsVisible = (ref: RefObject<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const callback: IntersectionObserverCallback = (entries) => {
    setIsVisible(entries[0].isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isVisible;
};