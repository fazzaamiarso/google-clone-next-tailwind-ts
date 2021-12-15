import { useState, useEffect } from "react";

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};
