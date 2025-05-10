import { useEffect, useState } from "react";

export const useScrollTrigger = (threshold: number) => {
  const [scrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > threshold);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        setIsScrolled(window.scrollY > threshold);
      });
  }, [threshold]);

  return scrolled;
};

export default useScrollTrigger;
