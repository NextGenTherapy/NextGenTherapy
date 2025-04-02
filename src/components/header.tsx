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
                        <Link href="/learn-more">Learn More</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/who-i-see">Who I see</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/about">About Me</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/services">Services</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/book-now">Book Now</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}