// components/ui/Button.tsx
import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base = "px-4 py-2 rounded-lg font-medium transition"
  const styles =
    variant === "primary"
      ? "bg-green-700 text-white hover:bg-green-600"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300"

  return <button className={`${base} ${styles} ${className}`} {...props} />
}
