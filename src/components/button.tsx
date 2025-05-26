import Link from "next/link";
import styles from "./button.module.css";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function Button({ href, children, type = "button" }: ButtonProps) {
  // Only allow internal navigation to prevent open redirects
  if (href && href.startsWith("/")) {
    return (
      <Link href={href} className={styles.button}>
        {children}
      </Link>
    );
  }

  // Render a button (can be used as submit/reset/button)
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
}