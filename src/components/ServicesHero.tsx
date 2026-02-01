import { Container } from '@/components/Container'

export function ServicesHero({
  title,
  children,
  id,
}: {
  title: string
  children?: {
    mainText?: string
    subText?: React.ReactNode
  }
  id?: string
}) {
  return (
    <Container>
      <div id={id} className="mx-auto max-w-7xl pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-xl tracking-tight text-navy-900 sm:text-2xl md:text-3xl">
            {title}
          </h1>
          {children && (
            <p className="text-xs tracking-wide text-navy-700 sm:mb-5 sm:text-sm lg:text-base">
              {children?.mainText} {children?.subText}
            </p>
          )}
        </div>
      </div>
    </Container>
  )
}
