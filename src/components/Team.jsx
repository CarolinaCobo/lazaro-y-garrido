import Image from 'next/image'
import Link from 'next/link'

import Lazaro from 'src/images/avatars/Lazaro.jpeg'
import Garrido from 'src/images/avatars/Garrido.jpeg'
import Inmo from 'src/images/avatars/Inmo.jpeg'

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'

export const people = [
  {
    name: 'ANTONIO LÁZARO',
    role: 'Abogado',
    imageUrl: Lazaro,
    bio: 'Licenciado en Derecho por la Universidad de Granada. Ejerce como abogado en el despacho en asuntos de orden civil, penal y administrativo.    ',
    email: 'lazaro@lazarogarrido.com',
    phone: '639960793',
    whatsapp: '+34639960793',
  },
  {
    name: 'ANTONIO GARRIDO',
    role: 'Abogado',
    imageUrl: Garrido,
    bio: 'Licenciado en Derecho por la Universidad de Granada. Ejerce como abogado en el despacho en asuntos de orden laboral, penal y civil.     ',
    email: 'garrido@lazarogarrido.com',
    phone: '657953202',
    whatsapp: '+34657953202',
  },
  {
    name: 'MÓNICA HERNÁNDEZ',
    role: 'Agente Inmobiliario',
    imageUrl: Inmo,
    bio: 'Diplomada en Magisterio por la Universidad de las Islas Baleares. Ejerce como como Asesora y comercial Inmobiliaria y dirige en el departamento inmobiliario del despacho.  Cuenta con una dilatada experiencia con más de 20 años en el sector comercial.     ',
    email: 'monica@lazarogarrido.com',
    phone: '',
    whatsapp: '',
  },
]

export function Team() {
  return (
    <section
      id="nuestro-equipo"
      aria-label="team"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Nuestro equipo
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Contamos con una basta experiencia en el ambito legal e inmobiliario
          </p>
        </div>

        <ul
          role="list"
          className="mt-16 space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="mb-8 space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                <Image
                  src={person.imageUrl}
                  width={200}
                  height={240}
                  layout="responsive"
                  className="rounded-lg shadow-lg"
                  alt="miembro del equipo"
                />
                <div className="sm:col-span-2">
                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-mallorca-600">{person.role}</p>
                    </div>
                    <div className="text-md">
                      <p className="text-gray-500">{person.bio}</p>
                    </div>
                  </div>
                  <div>
                    <dl className="mt-2 text-base text-gray-500">
                      <div className="mb-1 flex">
                        <Link
                          href={`mailto:${person.email}`}
                          className="flex items-center text-mallorca-600 hover:text-mallorca-100 hover:underline hover:underline-offset-2"
                          aria-label="correo"
                        >
                          <EnvelopeIcon
                            className=" h-6 w-6"
                            aria-hidden="true"
                          />
                          <span className=" ml-3">{person.email}</span>
                        </Link>
                      </div>

                      {person.phone !== '' ? (
                        <>
                          <div className="mb-1 flex">
                            <Link
                              href={`tel:${person.phone}`}
                              className="flex text-mallorca-600 hover:text-mallorca-100 hover:underline hover:underline-offset-2"
                              aria-label="telefono"
                            >
                              <PhoneIcon
                                className="h-6 w-6 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span className="ml-3">{person.phone}</span>
                            </Link>
                          </div>
                          <div className="mb-1 flex">
                            <Link
                              href={`https://wa.me/${person.whatsapp}`}
                              className="flex flex-row-reverse text-mallorca-600 hover:text-mallorca-100 hover:underline hover:underline-offset-2"
                              aria-label="Whatsapp number"
                            >
                              <span className="ml-3">WhatsApp</span>
                              <svg
                                class="h-6 w-6 fill-current text-green-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                              </svg>
                            </Link>
                          </div>
                        </>
                      ) : (
                        ''
                      )}
                    </dl>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
