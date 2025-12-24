import { createRoot } from "react-dom/client";
import { StrictMode, useState, useEffect } from "react";
import App from "./App.tsx";
import { LoadingScreen } from "./components/LoadingScreen.tsx";
import "./index.css";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure all resources are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Minimum loading time for smooth transition

    // Also check if page is fully loaded
    if (document.readyState === "complete") {
      setTimeout(() => setIsLoading(false), 800);
    } else {
      const handleLoad = () => {
        setTimeout(() => setIsLoading(false), 800);
      };
      window.addEventListener("load", handleLoad);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("load", handleLoad);
      };
    }

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <App />;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
