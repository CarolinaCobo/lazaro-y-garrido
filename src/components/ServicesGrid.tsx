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
    title: 'Civil',
    description:
      'Prestamos servicios en procesos matrimoniales obligaciones y contratos, responsabilidad civil por culpa contractual y extracontractual, accidentes de tráfico, consumidores y usuarios, herencias y sucesiones.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Penal',
    description:
      'Ejercemos la acusación particular o defensa en todo tipo de procesos penales derivados de la comisión de delitos de cualquier naturaleza.',
    icon: LockClosedIcon,
  },
  {
    title: 'Laboral',
    description:
      'Ejercemos la representación de la parte actora o demandada en procesos de despido, sanciones, derechos fundamentales, seguridad social, reclamaciones de cantidades.',
    icon: UsersIcon,
  },
  {
    title: 'Administrativo',
    description:
      'Realizamos la representación de los interesados en procedimientos sancionadores, responsabilidad patrimonial de las Administraciones Públicas, urbanístico etc.',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Inmobiliario',
    description:
      'Asesoramiento inmobiliario profesional, realizacion de edificios, compraventa de solares y propiedades.',
    icon: HomeIcon,
  },
  {
    title: 'Arrendamientos',
    description:
      'Asesoramiento y gestión legal de contratos de arrendamiento, desahucios, comunidades de propietarios, y resolución de conflictos entre arrendadores y arrendatarios.',
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
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-mallorca-50 transition-colors duration-300 group-hover:bg-mallorca-200 md:h-12 md:w-12">
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
