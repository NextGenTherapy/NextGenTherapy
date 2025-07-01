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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} ref={navRef}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <h1>NextGenTherapy</h1>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <Button
          type="button"
          className={styles.menuButton}
          onClick={toggleMenu}
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
            <Link href="/who-i-see" onClick={closeMenu}>
              Who I See
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/therapy-101" onClick={closeMenu}>
              Therapy 101
            </Link>
          </li>
          {/* <li className={styles.navItem}>
            <Link href="/resources" onClick={closeMenu}>
              Resources
            </Link>
          </li> */}
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
