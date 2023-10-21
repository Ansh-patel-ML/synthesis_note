import { useEffect, useState } from "react";

const useScrollToTop = (thresold = 10) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > thresold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, [thresold]);
  return scrolled;
};

export default useScrollToTop;
