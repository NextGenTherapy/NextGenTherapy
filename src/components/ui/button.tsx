import Link from 'next/link';
import styles from './button.module.scss';
import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  href?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
}

export default function Button({
  href,
  children,
  type = 'button',
  disabled = false,
  onClick,
  className,
  variant = 'primary',
  ...restProps
}: ButtonProps) {
  const variantClass = styles[variant];
  const buttonClassName = className ? `${variantClass} ${className}` : variantClass;

  // Only allow internal navigation to prevent open redirects
  if (href && href.startsWith('/')) {
    return (
      <Link href={href} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  // Render a button (can be used as submit/reset/button)
  return (
    <button
      type={type}
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
}
