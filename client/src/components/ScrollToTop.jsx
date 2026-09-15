import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Skip scroll on browser Back/Forward — preserve native position
    if (navType === "POP") return;

    // If there's a hash, try to scroll to that element
    if (hash) {
      try {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      } catch (err) {
        console.warn("Invalid hash selector:", hash);
      }
    }

    // Otherwise scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash, key, navType]);

  return null;
}
