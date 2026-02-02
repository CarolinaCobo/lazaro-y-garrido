import Link from 'next/link'
import clsx from 'clsx'
import { ReactNode } from 'react'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-lg py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 text-sm focus:outline-none',
}

const variantStyles: Record<string, Record<string, string>> = {
  solid: {
    navy: 'bg-navy-900 text-white hover:bg-mallorca-200 hover:text-navy-100 active:bg-navy-800 active:text-navy-300 focus-visible:outline-navy-900 ',
    mallorca:
      'bg-mallorca-600 px-8 py-4  text-white hover:text-navy-100 hover:bg-mallorca-500 active:bg-mallorca-800 active:text-navy-100 focus-visible:outline-mallorca-600',
    white:
      'bg-white px-8 py-4 text-navy-900 hover:bg-mallorca-50 active:bg-mallorca-200 active:text-navy-600 focus-visible:outline-white hover:text-white border-2 border-white',
  },
  outline: {
    navy: 'ring-navy-200 text-navy-700 hover:text-navy-900 hover:ring-navy-300 active:bg-navy-100 active:text-navy-600 focus-visible:outline-mallorca-600 focus-visible:ring-navy-300',
    white:
      'ring-navy-700 text-white hover:ring-navy-500 active:ring-navy-700 active:text-navy-400 focus-visible:outline-white',
  },
}

interface ButtonProps {
  variant?: 'solid' | 'outline'
  color?: 'navy' | 'mallorca' | 'white'
  className?: string
  href?: string
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  target?: string
  rel?: string
  disabled?: boolean
}

export function Button({
  variant = 'solid',
  color = 'navy',
  className,
  href,
  children,
  disabled,
  ...props
}: ButtonProps) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  return href ? (
    <Link
      href={href}
      className={className}
      target={props.target}
      rel={props.rel}
    >
      {children}
    </Link>
  ) : (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
