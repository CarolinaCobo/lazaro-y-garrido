import { Container } from '@/components/Container'

export function ServicesHero({
  title,
  children,
}: {
  title: string
  children?: {
    mainText?: string
    subText?: React.ReactNode
  }
}) {
  return (
    <section className="relative pb-4 pt-4">
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4">
            <div className="relative flex flex-col items-center justify-center rounded-2xl bg-mallorca-600 px-6 py-12 text-white shadow-xl lg:px-10">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="mb-2 text-2xl font-bold uppercase sm:text-2xl lg:text-3xl">
                  {title}
                </h1>
                {children && (
                  <p className="mb-4 text-sm tracking-wide text-white/90 sm:mb-5 sm:text-base lg:text-lg">
                    {children?.mainText} {children?.subText}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
