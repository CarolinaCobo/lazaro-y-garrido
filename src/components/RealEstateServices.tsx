import { Container } from '@/components/Container'

const stats = [
  {
    icon: (
      <svg
        className="h-8 w-8 text-mallorca-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    number: '5+',
    description: 'Años de experiencia',
  },
  {
    icon: (
      <svg
        className="h-8 w-8 text-mallorca-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    number: '100%',
    description: 'Clientes satisfechos',
  },
  {
    icon: (
      <svg
        className="h-8 w-8 text-mallorca-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    number: '500+',
    description: 'Propiedades gestionadas',
  },
]

export function RealEstateServices() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="space-y-12">
          {/* Green Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-mallorca-200 p-8 md:p-12">
            <div className="relative z-10">
              {/* Main Content */}
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  Tu próximo hogar comienza aquí
                </h2>
                <p className="mt-6 text-base text-white sm:text-lg md:text-xl">
                  Quieres ser el primero en recibir nuevas propiedades?
                </p>

                <div className="mt-10 flex flex-row">
                  <input
                    type="text"
                    placeholder="email"
                    className="mr-2 w-full rounded-lg border-2 border-white bg-white px-3 py-2 text-base font-medium text-mallorca-600 transition-colors hover:bg-mallorca-200 hover:text-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  />

                  <a
                    href="https://www.lginmobiliaria.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white px-6 text-lg font-semibold text-mallorca-600 transition-colors hover:bg-mallorca-200 hover:text-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Enviar <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-navy-900 sm:text-4xl">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-base text-navy-600 sm:text-lg">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
