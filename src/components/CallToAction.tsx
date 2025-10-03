import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-mallorca-900 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Para más información{' '}
          </h2>
          <Button href="/contacto" color="white" className="mt-10">
            Contacto
          </Button>
        </div>
      </Container>
    </section>
  )
}
