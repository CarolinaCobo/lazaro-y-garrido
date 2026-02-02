import { useState } from 'react'
import { Container } from '@/components/Container'
import {
  DocumentTextIcon,
  LockClosedIcon,
  UsersIcon,
  BuildingOfficeIcon,
  HomeIcon,
  BriefcaseIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

interface Service {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const servicesList: Service[] = [
  {
    title: 'Derecho Civil',
    description:
      '​Soluciones para su tranquilidad diaria. Le asesoramos en los momentos clave: herencias, procesos de familia, contratos y reclamaciones por accidentes. Estamos a su lado para defender sus intereses y los de su familia.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Derecho Penal',
    description:
      '​Protección y defensa especializada. Si se enfrenta a un proceso penal, ejercemos su defensa o acusación con total confidencialidad. Le protegemos en cualquier procedimiento judicial con rigor y compromiso absoluto.',
    icon: LockClosedIcon,
  },
  {
    title: 'Derecho Laboral',
    description:
      'Sus derechos en el trabajo, protegidos. Defendemos sus intereses laborales con firmeza. Le representamos en despidos, reclamaciones de cantidad y conflictos con la Seguridad Social, buscando siempre la mejor solución para usted.',
    icon: UsersIcon,
  },
  {
    title: 'Derecho Administrativo',
    description:
      '​Su defensa frente a la Administración. Le acompañamos en cualquier trámite o reclamación frente a organismos públicos. Somos especialistas en recursos ante sanciones, responsabilidad patrimonial y gestión urbanística, simplificando los procesos para usted.',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Gestión Inmobiliaria',
    description:
      'Expertos en compraventa de propiedades. Le ayudamos a rentabilizar sus inversiones. Gestionamos directamente la compra y venta de solares y propiedades, ofreciéndole un asesoramiento integral que garantiza seguridad en cada paso de su proyecto.',
    icon: HomeIcon,
  },
  {
    title: 'Arrendamientos',
    description:
      'Alquileres seguros y sin problemas. Gestionamos sus contratos de alquiler y resolvemos cualquier conflicto entre propietarios e inquilinos. Especialistas en comunidades de vecinos, reclamaciones de rentas y desahucios con total eficacia.',
    icon: BriefcaseIcon,
  },
]

function ServiceCard({ service }: { service: Service }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="group relative rounded-2xl border border-navy-100 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl md:p-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left md:cursor-default"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center justify-between">
          <div className="mb-0 flex items-center md:mb-6">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-mallorca-300 transition-colors duration-300 md:h-12 md:w-12">
                <service.icon className="h-6 w-6 text-white md:h-6 md:w-6" />
              </div>
            </div>
            <h3 className="ml-4 text-xl font-bold text-navy-800 md:text-lg">
              {service.title}
            </h3>
          </div>
          <ChevronDownIcon
            className={`h-6 w-6 flex-shrink-0 text-navy-600 transition-transform duration-300 md:hidden ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>
      {/* Mobile: Collapsible content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isExpanded ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-base leading-relaxed text-navy-600">
          {service.description}
        </p>
      </div>
      {/* Desktop: Always visible content */}
      <p className="hidden text-sm leading-relaxed text-navy-600 md:block">
        {service.description}
      </p>
    </div>
  )
}

export function ServicesGrid() {
  return (
    <section id="servicios" className="bg-white py-8">
      <Container>
        <div className="grid gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {servicesList.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  )
}
