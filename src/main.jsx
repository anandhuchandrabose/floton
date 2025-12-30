import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { ReactLenis } from "lenis/react";

import App from "./App.jsx";
import TopBar from "@/components/TopBar/TopBar";

import "./globals.css";

const Root = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1000);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollSettings = useMemo(() => {
    return isMobile
      ? {
          duration: 0.8,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          smoothTouch: true,
          touchMultiplier: 1.5,
          infinite: false,
          lerp: 0.09,
          wheelMultiplier: 1,
          orientation: "vertical",
          smoothWheel: true,
          syncTouch: true,
        }
      : {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
          lerp: 0.1,
          wheelMultiplier: 1,
          orientation: "vertical",
          smoothWheel: true,
          syncTouch: true,
        };
  }, [isMobile]);

  return (
    <ReactLenis root options={scrollSettings}>
      <TopBar />
      <App />
    </ReactLenis>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
