import Link from 'next/link'
import { ReactNode } from 'react'

interface NavLinkProps {
  href: string
  children: ReactNode
  target?: string
  rel?: string
}

export function NavLink({ href, children, target, rel }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="inline-block rounded-full py-1 px-2 text-sm text-slate-700 hover:bg-mallorca-200 hover:text-white sm:text-base"
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  )
}
