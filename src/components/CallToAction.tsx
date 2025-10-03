import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-mallorca-600 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-2xl tracking-tight text-white sm:text-3xl md:text-4xl">
            Para más información{' '}
          </h2>
          <Button href="/contacto" color="white" className="mt-10">
            Contacta con nosotros
          </Button>
        </div>
      </Container>
    </section>
  )
}
