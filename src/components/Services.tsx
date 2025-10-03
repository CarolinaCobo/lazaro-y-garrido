import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  DocumentTextIcon,
  LockClosedIcon,
  UsersIcon,
  BuildingOfficeIcon,
  HomeIcon,
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
      'Ejercemos la representación de la parte actora o demandada en procesos de despido, sanciones, derechos fundamentales, seguridad social, reclamaciones de cantidades. ',
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
]

export function Services() {
  const LegalServices = () => {
    return (
      <div className="bg-white pb-6 sm:pb-4">
        <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 md:mt-20 lg:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 md:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-y-24">
            {servicesList.map((feature) => (
              <div key={feature.title} className="relative">
                <dt className="text-lg font-semibold text-mallorca-900 sm:text-xl">
                  <div className="size-10 absolute top-0 left-0 flex items-center justify-center rounded-lg ">
                    <feature.icon className="h-6 w-6 text-mallorca-600" />
                  </div>
                  <div className="ml-8">{feature.title}</div>
                </dt>
                <dd className="mt-4 text-sm text-mallorca-900 sm:text-base">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }

  return (
    <section
      id="servicios"
      aria-label="Servicios ofrecidos por el despacho"
      className="relative overflow-hidden bg-white sm:py-10"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="py-4 font-display text-2xl tracking-tight text-mallorca-900 sm:text-3xl md:text-4xl lg:text-5xl">
            No defendemos casos,{' '}
            <span className="italic">defendemos personas.</span>
          </h2>
        </div>
        <LegalServices />
      </Container>
    </section>
  )
}
