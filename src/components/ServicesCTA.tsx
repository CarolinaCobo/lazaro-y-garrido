import { Container } from '@/components/Container'

export function ServicesCTA() {
  return (
    <section className="bg-navy-50 py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-navy-800">
            ¿Necesitas asesoramiento legal?
          </h2>
          <p className="mb-8 text-lg text-navy-600">
            Contacta con nosotros para una consulta personalizada y descubre
            cómo podemos ayudarte.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-lg bg-mallorca-600 px-8 py-4 font-semibold text-white transition-colors duration-200 hover:bg-mallorca-400"
            >
              Contactar Ahora
            </a>
            <a
              href="tel:+34971234567"
              className="inline-flex items-center justify-center rounded-lg border-2 border-mallorca-600 px-8 py-4 font-semibold text-mallorca-600 transition-colors duration-200 hover:bg-mallorca-400 hover:text-white"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
