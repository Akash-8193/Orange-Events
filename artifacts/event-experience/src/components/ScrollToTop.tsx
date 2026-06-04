import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    // Only scroll to top if the navigation is to a new page (not an anchor link)
    // Wait for the next tick to ensure the DOM has updated
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 0);
  }, [pathname]);

  return null;
}
