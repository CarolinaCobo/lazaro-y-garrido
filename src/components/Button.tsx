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
    slate:
      'bg-slate-900 text-white hover:bg-mallorca-200 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 ',
    mallorca:
      'bg-mallorca-600 text-white hover:text-slate-100 hover:bg-mallorca-500 active:bg-mallorca-800 active:text-slate-100 focus-visible:outline-mallorca-600',
    white:
      'bg-white text-slate-900 hover:bg-mallorca-50 active:bg-mallorca-200 active:text-slate-600 focus-visible:outline-white hover:text-white border-2 border-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-mallorca-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
}

interface ButtonProps {
  variant?: 'solid' | 'outline'
  color?: 'slate' | 'mallorca' | 'white'
  className?: string
  href?: string
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  target?: string
  rel?: string
}

export function Button({
  variant = 'solid',
  color = 'slate',
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
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
    <button className={className} {...props}>
      {children}
    </button>
  )
}
