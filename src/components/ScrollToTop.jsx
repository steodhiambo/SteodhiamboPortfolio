import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const main = document.getElementById("main-content");
    if (main) {
      main.focus();
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
