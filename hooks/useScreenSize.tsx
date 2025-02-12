import { useState, useEffect } from "react";

type ScreenSize = {
  mobile: boolean;
  medium: boolean;
  large: boolean;
};

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState({
    mobile: false,
    medium: false,
    large: false,
  });

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const mediumQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1024px)"
    );
    const largeQuery = window.matchMedia("(min-width: 1024px)");

    const updateSizes = () => {
      setScreenSize({
        mobile: mobileQuery.matches,
        medium: mediumQuery.matches,
        large: largeQuery.matches,
      });
    };

    // Initial update
    updateSizes();

    // Event listeners for all queries
    mobileQuery.addEventListener("change", updateSizes);
    mediumQuery.addEventListener("change", updateSizes);
    largeQuery.addEventListener("change", updateSizes);

    return () => {
      mobileQuery.removeEventListener("change", updateSizes);
      mediumQuery.removeEventListener("change", updateSizes);
      largeQuery.removeEventListener("change", updateSizes);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
