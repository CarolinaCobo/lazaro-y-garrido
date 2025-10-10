import { Container } from '@/components/Container'
import Link from 'next/link'

export function ServicesCTA() {
  return (
    <section className="bg-navy-50 py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-navy-800">
            ¿Necesitas asesoramiento legal?
          </h2>
          <p className="mb-8 text-base text-navy-600">
            Contacta con nosotros para una consulta personalizada y descubre
            cómo podemos ayudarte.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-lg bg-mallorca-600 px-8 py-4 font-semibold text-white transition-colors duration-200 hover:bg-mallorca-400"
            >
              Contactar Ahora
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
