import Link from "next/link";
import styles from "./button.module.css";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  href?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  href,
  children,
  type = "button",
  disabled = false,
  onClick,
  className,
  ...restProps
}: ButtonProps) {
  // Only allow internal navigation to prevent open redirects
  if (href && href.startsWith("/")) {
    return (
      <Link href={href} className={className || styles.button}>
        {children}
      </Link>
    );
  }

  // Render a button (can be used as submit/reset/button)
  return (
    <button 
      type={type} 
      className={className || styles.button} 
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
}
