import Link from "next/link";
import styles from "./button-home.module.css";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function ButtonHome({ href, children }: ButtonProps) {
  // Only allow internal navigation to prevent open redirects
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={styles.button}>
        {children}
      </Link>
    );
  }

  // If not an internal link, render nothing
  return null;
}
