import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToActionBlog() {
  return (
    <section
      id="get-started-today"
      className="relative mt-12 overflow-hidden bg-mallorca-900 py-8"
    >
      <Container className="relative">
        <div className="max-w-2lg mx-auto text-center">
          <h4 className="font-display text-lg tracking-tight text-white sm:text-2xl">
            Si te interesa saber más o tienes alguna pregunta{' '}
          </h4>
          <Button href="/contacto" color="white" className="mt-10">
            Contáctanos
          </Button>
        </div>
      </Container>
    </section>
  )
}
