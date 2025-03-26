import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                {/* Logo Section */}
                <div className={styles.logo}>
                    <Link href="/">
                        <h1>NextGenTherapy</h1>
                    </Link>
                </div>

                {/* Nav bar links */}
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/therapy-101">Therapy 101</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/why-therapy">Why Therapy</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/clientele">Who I see</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/services">Services</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}