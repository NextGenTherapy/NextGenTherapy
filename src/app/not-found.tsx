import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <h1>404 – Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className={styles.homeLink}>
        Go back home
      </Link>
    </main>
  );
}