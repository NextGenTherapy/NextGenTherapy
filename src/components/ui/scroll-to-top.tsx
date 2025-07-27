"use client";

import { useState, useEffect } from "react";
import Button from "./button";
import styles from "./scroll-to-top.module.scss";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`${styles.scrollToTop} ${isVisible ? styles.visible : ""}`}>
      <Button
        type="button"
        onClick={scrollToTop}
        className={styles.scrollButton}
        aria-label="Scroll to top of page"
        title="Scroll to top"
      >
        <span className={styles.arrow}>↑</span>
      </Button>
    </div>
  );
}
