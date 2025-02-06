import { useState, useEffect } from "react";

export function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("");
  const [atTop, setAtTop] = useState(true); // New state to track top position

  useEffect(() => {
    if (typeof window === "undefined") return; // Avoid SSR issues

    const listener = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;

      setScrollY(currentScrollY);
      setScrollX(currentScrollX);

      const direction = lastScrollTop > currentScrollY ? "up" : "down";
      setScrollDirection(direction);
      setLastScrollTop(currentScrollY);

      // Set atTop to true if we're at the top of the page
      setAtTop(currentScrollY === 0);
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [lastScrollTop]);

  return {
    scrollY,
    scrollX,
    scrollDirection,
    atTop, // Return the atTop state
  };
}
