import Link from 'next/link'
import axios from 'axios'
import { people } from './Team'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/Button'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Modal } from './Modal'
import { ServicesHero } from './ServicesHero'
import { Container } from '@/components/Container'

interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const [open, setOpen] = useState(false)

  const onSubmit = (data: FormData) => {
    console.log('📝 Form data received:', data)
    console.log('🔍 Data types:', {
      firstName: typeof data.firstName,
      lastName: typeof data.lastName,
      email: typeof data.email,
      message: typeof data.message,
    })

    // Test if data is actually being sent
    console.log('🧪 Testing data values:', {
      'data.firstName': data.firstName,
      'data.lastName': data.lastName,
      'data.email': data.email,
      'data.message': data.message,
    })

    // Transform data to match Pipedream expected field names
    const transformedData = {
      nombre: data.firstName,
      apellidos: data.lastName,
      correo: data.email,
      mensaje: data.message,
    }
    console.log('🔄 Transformed data for Pipedream:', transformedData)
    console.log(
      '📤 Sending to Pipedream URL: https://eo7vnosi4j5466v.m.pipedream.net'
    )

    axios
      .post('https://eo7vnosi4j5466v.m.pipedream.net', transformedData)
      .then((response) => {
        console.log('✅ Success! Pipedream response:', response.data)
        console.log('📧 Response status:', response.status)
        setOpen(true)
        reset()
      })
      .catch((e) => {
        console.error('❌ Error sending to Pipedream:', e)
        console.error('Error details:', e.response?.data || e.message)
      })
  }

  return (
    <>
      <ServicesHero title="Contacto" />
      <Container>
        <ul
          role="list"
          className="mt-8 space-y-12 lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="mb-8 space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:gap-8">
                <div className="sm:col-span-2">
                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6 sm:text-xl">
                      <h3>{person.name}</h3>
                      <p className="text-mallorca-600">{person.role}</p>
                    </div>
                  </div>
                  <div>
                    <dl className="mt-2 text-sm text-navy-500 sm:text-base">
                      <div className="mb-1 flex">
                        <Link
                          href={`mailto:${person.email}`}
                          className="flex items-center text-mallorca-600 hover:text-mallorca-100 hover:underline hover:underline-offset-2"
                          aria-label="correo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <EnvelopeIcon
                            className="h-6 w-6"
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
                              target="_blank"
                              rel="noopener noreferrer"
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
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ml-3">WhatsApp</span>
                              <svg
                                className="h-6 w-6 fill-current text-green-400"
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
        <p className="mt-6 text-sm text-navy-500 sm:text-base">
          Si no sabes con quien deberias contactar puedes escribirnos a{' '}
          <Link
            href="mailto:info@lazarogarrido.com"
            className="font-medium text-mallorca-600 hover:underline"
          >
            info@lazarogarrido.com
          </Link>
        </p>

        <h2 className="mt-12 text-center text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl md:text-4xl">
          Formulario de contacto{' '}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="mt-10 gap-y-8 gap-x-6 sm:grid-cols-2"
        >
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-navy-700 sm:text-base"
                  >
                    Nombre<span className="text-mallorca-500 ">*</span>
                  </label>
                  <input
                    {...register('firstName', { required: true })}
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Maria"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-mallorca-500 focus:ring-mallorca-500 sm:text-sm"
                  />
                  {errors.firstName && (
                    <span className="text-red-600">
                      Este campo es obligatorio
                    </span>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-navy-700 sm:text-base"
                  >
                    Apellidos<span className="text-mallorca-500 ">*</span>
                  </label>
                  <input
                    {...register('lastName', { required: true })}
                    type="text"
                    placeholder="Pérez"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-mallorca-500 focus:ring-mallorca-500 sm:text-sm"
                  />
                  {errors.lastName && (
                    <span className="text-red-600">
                      Este campo es obligatorio
                    </span>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy-700 sm:text-base"
                  >
                    Dirección de correo electrónico
                    <span className="text-mallorca-500 ">*</span>
                  </label>
                  <input
                    {...register('email', { required: true })}
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="ej: email@email.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-mallorca-500 focus:ring-mallorca-500 sm:text-sm"
                  />
                  {errors.email && (
                    <span className="text-red-600">
                      Este campo es obligatorio
                    </span>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-navy-700 sm:text-base"
                  >
                    Mensaje<span className="text-mallorca-500 ">*</span>
                  </label>
                  <div className="mt-1">
                    <textarea
                      {...register('message', { required: true })}
                      id="message"
                      name="message"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-mallorca-500 focus:ring-mallorca-500 sm:text-sm"
                      placeholder="Desearía saber más sobre..."
                      defaultValue={''}
                    />
                    {errors.message && (
                      <span className="text-red-600">
                        Este campo es obligatorio
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <Button className="mt-6 w-full md:w-24" type="submit">
                Enviar
              </Button>
            </div>
            <Modal open={open} setOpen={setOpen} />
          </div>
        </form>
      </Container>
    </>
  )
}
