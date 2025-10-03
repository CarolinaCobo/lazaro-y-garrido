import clsx from 'clsx'
import { ReactNode, HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  )
}
