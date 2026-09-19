import type { ButtonHTMLAttributes, ReactNode } from "react"
import { Link } from "react-router-dom"
import { classNames as cx } from "../../utils/classNames"
import styles from "./Button.module.css"

type Variant = "primary" | "outline" | "ghost" | "dark" | "soft"
type Size = "sm" | "md" | "lg"

type Shared = {
  children: ReactNode
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  className?: string
}

type ButtonProps = Shared &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined
  }

type LinkProps = Shared & {
  to: string
}

const classNames = ({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
}: Omit<Shared, "children">) =>
  cx(styles.button, styles[variant], styles[size], fullWidth && styles.full, className)

export function Button({
  children,
  variant,
  size,
  fullWidth,
  className,
  to,
  ...props
}: ButtonProps | LinkProps) {
  const classes = classNames({ variant, size, fullWidth, className })

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
