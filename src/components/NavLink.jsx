import Link from 'next/link'

export function NavLink({ href, children, target, rel }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-full py-1 px-2 text-sm text-slate-700 hover:bg-mallorca-200 hover:text-white"
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  )
}
