import { Container } from '@/components/Container'
import { RealStateContact } from './RealStateContact'

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
    number: '20+',
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
    <section className="bg-mallorca-600 py-8">
      <RealStateContact />
      <Container>
        <div className="mt-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-xl bg-white p-4 shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{stat.icon}</div>
                  <div className="text-lg font-bold text-navy-900 sm:text-xl">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-sm text-navy-600 sm:text-base">
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
