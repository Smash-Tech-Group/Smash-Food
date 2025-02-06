import { useState, useEffect } from "react";

export function useScroll() {
  // Storing last scroll position to detect direction
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // State for scroll position and direction
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("");

  // Listener for scroll events
  const listener = () => {
    const bodyOffset = document.body.getBoundingClientRect();

    setScrollY(-bodyOffset.top); // Update vertical scroll position
    setScrollX(bodyOffset.left); // Update horizontal scroll position

    // Update scroll direction (up or down)
    const direction = lastScrollTop > -bodyOffset.top ? "down" : "up";
    setScrollDirection(direction);
    setLastScrollTop(-bodyOffset.top); // Store last scroll position
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", listener);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [lastScrollTop]); // Re-run effect when lastScrollTop changes

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
}
