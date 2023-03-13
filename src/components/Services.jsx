import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

const servicesList = [
  {
    title: 'Civil',
    description:
      'En Lázaro & Garrido abogados prestamos servicios en procesos matrimoniales obligaciones y contratos, responsabilidad civil por culpa contractual y extracontractual, accidentes de tráfico, consumidores y usuarios, sucesiones y herencias.    ',
    image: '',
  },
  {
    title: 'Penal',
    description:
      'Ejercemos la acusación particular o defensa en todo tipo de procesos penales derivados de la comisión de delitos de cualquier naturaleza.',
    image: '',
  },
  {
    title: 'Laboral',
    description:
      'Ejercemos la representación de la parte actora o demandada en procesos de despido, sanciones, derechos fundamentales, seguridad social, reclamaciones de cantidades. ',
    image: '',
  },
  {
    title: 'Administrativo',
    description:
      'Realizamos la representación de los interesados en procedimientos sancionadores, responsabilidad patrimonial de las Administraciones Públicas, urbanístico etc.',
    image: '',
  },
]

export function Services() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="servicios"
      aria-label="Servicios ofrecidos por el despacho"
      className="relative overflow-hidden bg-mallorca-900 pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="bg-mallorca-900 font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            No defendemos casos, defendemos personas.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100"></p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 "
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {servicesList.map((service, serviceIndex) => (
                    <div
                      key={service.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-xl lg:p-6',
                        selectedIndex === serviceIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === serviceIndex
                              ? 'text-mallorca-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {service.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === serviceIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {service.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="">
                {servicesList.map((service) => (
                  <Tab.Panel key={service.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {service.description}
                      </p>
                    </div>
                    {/* <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <div className="relative sm:px-6 lg:hidden">
                        <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                        <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                          {service.description}
                        </p>
                      </div> */}
                    {/* <Image
                        className="w-full"
                        src={service.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      /> */}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
