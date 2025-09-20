"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "../ui/button";
import styles from "./header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMenu();
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} ref={navRef}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <div>NextGenTherapy</div>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <Button
          type="button"
          className={styles.menuButton}
          onClick={toggleMenu}
          onKeyDown={handleMenuKeyDown}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-controls="main-navigation"
        >
          <span className={styles.hamburgerIcon}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </Button>

        {/* Navigation List */}
        <ul
          id="main-navigation"
          className={`${styles.navList} ${
            isMenuOpen ? styles.navListOpen : ""
          }`}
        >
          <li className={styles.navItem}>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" onClick={closeMenu}>
              About Me
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about-therapy" onClick={closeMenu}>
              About Therapy
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/book-now" onClick={closeMenu}>
              Book Now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
