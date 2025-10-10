import { Container } from '@/components/Container'
import {
  DocumentTextIcon,
  LockClosedIcon,
  UsersIcon,
  BuildingOfficeIcon,
  HomeIcon,
  BriefcaseIcon,
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

export function ServicesGrid() {
  return (
    <section className="bg-white py-8">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-navy-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-mallorca-50 transition-colors duration-300 group-hover:bg-mallorca-200">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="ml-4 text-lg font-bold text-navy-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-navy-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
