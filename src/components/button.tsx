import Link from "next/link";
import styles from "./button.module.css";

interface ButtonProps {
  href?: string; // 
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

export default function Button({ href, type = "button", children }: ButtonProps) {
  const handleEmailSubmit = () => {
    const email = "andreeahorhocea95@gmail.com";
    const subject = "Contact Inquiry";
    const body = "Hello, I would like to get in touch with you.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  if (href) {
    return (
      <Link href={href} className={styles.button}>
        {children}
      </Link>
    );
  }

  // Render a regular button for non-link cases
  return (
    <button
      type={type}
      onClick={type === "submit" ? handleEmailSubmit : undefined}
      className={styles.button}
    >
      {children}
    </button>
  );
}