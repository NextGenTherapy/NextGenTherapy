'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Button from '../ui/button';
import styles from './header.module.scss';

const dropdownLinks = [
  { href: '/therapy-for-women', label: 'Therapy for Women' },
  { href: '/neurodiversity', label: 'ADHD & Autism in Adults' },
  { href: '/teen-therapy', label: 'Therapy for Teenagers' },
  { href: '/child-therapy', label: 'Therapy for Children' },
  { href: '/romanian-therapy', label: 'Therapy in Romanian' },
  { href: '/online-therapy', label: 'Online Therapy' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsMobileDropdownOpen(false);
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMenu();
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileDropdownOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const handleDropdownKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    } else if (event.key === 'Escape' && isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  const handleMobileDropdownKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMobileDropdown();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isDropdownOpen) {
          setIsDropdownOpen(false);
        } else if (isMenuOpen) {
          closeMenu();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, isDropdownOpen]);

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
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen ? 'true' : 'false'}
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
          className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}
        >
          <li className={styles.navItem}>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
          </li>

          {/* Desktop Dropdown */}
          <li
            ref={dropdownRef}
            className={`${styles.navItem} ${styles.dropdown} ${styles.desktopOnly}`}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              type="button"
              className={styles.dropdownTrigger}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onKeyDown={handleDropdownKeyDown}
            >
              What I Work With
              <svg
                className={`${styles.chevron} ${isDropdownOpen ? styles.chevronOpen : ''}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul
              className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownMenuOpen : ''}`}
              role="menu"
            >
              {dropdownLinks.map((link) => (
                <li key={link.href} role="menuitem">
                  <Link href={link.href} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className={styles.dropdownDivider} role="separator" aria-hidden="true"></li>
              <li role="menuitem">
                <Link href="/is-this-right-for-you" onClick={closeMenu}>
                  Is This Right For You?
                </Link>
              </li>
            </ul>
          </li>

          {/* Mobile Dropdown (Accordion) */}
          <li className={`${styles.navItem} ${styles.mobileDropdown} ${styles.mobileOnly}`}>
            <button
              type="button"
              className={styles.mobileDropdownTrigger}
              aria-expanded={isMobileDropdownOpen}
              onClick={toggleMobileDropdown}
              onKeyDown={handleMobileDropdownKeyDown}
            >
              What I Work With
              <svg
                className={`${styles.chevron} ${isMobileDropdownOpen ? styles.chevronOpen : ''}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul
              className={`${styles.mobileDropdownMenu} ${isMobileDropdownOpen ? styles.mobileDropdownMenuOpen : ''}`}
            >
              {dropdownLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className={styles.dropdownDivider}></li>
              <li>
                <Link href="/is-this-right-for-you" onClick={closeMenu}>
                  Is This Right For You?
                </Link>
              </li>
            </ul>
          </li>

          <li className={styles.navItem}>
            <Link href="/pricing" onClick={closeMenu}>
              Pricing
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.bookNowItem}`}>
            <Link href="/book-now" onClick={closeMenu}>
              Book a Free Call
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
