import Image from 'next/image'
import { Container } from '@/components/Container'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Modal } from './Modal'

interface FormData {
  email: string
  phone: string
  message: string
}

export function RealStateContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const [open, setOpen] = useState(false)

  const onSubmit = (data: FormData) => {
    console.log(data)
    axios
      .post('https://eo7vnosi4j5466v.m.pipedream.net', data)
      .then((response) => {
        setOpen(true)
        reset()
      })
      .catch((e) => console.error(e))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      className="bg-mallorca-600"
    >
      <Container>
        <div className="relative rounded-2xl  bg-white shadow-lg">
          <div className="relative h-40 overflow-hidden rounded-b-none md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
            <Image
              alt=""
              src="https://images.pexels.com/photos/8293700/pexels-photo-8293700.jpeg"
              fill
              className="rounded-t-2xl object-cover object-center md:rounded-l-2xl md:rounded-r-none"
            />
          </div>
          <div className="relative py-1 sm:py-2 lg:px-4 lg:py-2">
            <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-8 lg:w-1/2 lg:pr-8 lg:pl-16 xl:pl-20">
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <div className="bg-white py-1 px-4 md:px-6 lg:px-8">
                    <div className="mx-auto max-w-md py-8">
                      <p className="text-xl font-semibold tracking-tight text-navy-900 sm:text-2xl">
                        Tu próximo hogar comienza aquí
                      </p>
                      <p className="mt-2 text-xs text-navy-600 sm:text-sm">
                        ¿Quieres ser el primero en recibir nuevas propiedades?
                        ¿Necesitas asesoramiento inmobiliario? Te ayudamos a
                        encontrar el hogar de tus sueños.
                      </p>
                      <div className="mt-2">
                        <div className="space-y-2">
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-xs font-medium text-navy-700 sm:text-sm"
                            >
                              Email<span className="text-mallorca-500">*</span>
                            </label>
                            <input
                              {...register('email', { required: true })}
                              type="email"
                              name="email"
                              id="email"
                              placeholder="email@email.com"
                              className="mt-1 w-full rounded-md border border-navy-300 px-3 py-2 text-sm focus:border-mallorca-500 focus:outline-none focus:ring-1 focus:ring-mallorca-500"
                            />
                            {errors.email && (
                              <span className="text-xs text-red-600">
                                Este campo es obligatorio
                              </span>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-xs font-medium text-navy-700 sm:text-sm"
                            >
                              Teléfono
                              <span className="text-mallorca-500">*</span>
                            </label>
                            <input
                              {...register('phone', { required: true })}
                              type="tel"
                              name="phone"
                              id="phone"
                              placeholder="600 000 000"
                              className="mt-1 w-full rounded-md border border-navy-300 px-3 py-2 text-sm focus:border-mallorca-500 focus:outline-none focus:ring-1 focus:ring-mallorca-500"
                            />
                            {errors.phone && (
                              <span className="text-xs text-red-600">
                                Este campo es obligatorio
                              </span>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="message"
                              className="block text-xs font-medium text-navy-700 sm:text-sm"
                            >
                              Mensaje
                              <span className="text-mallorca-500">*</span>
                            </label>
                            <textarea
                              {...register('message', { required: true })}
                              name="message"
                              id="message"
                              placeholder="Cuéntanos qué buscas..."
                              rows={3}
                              className="mt-1 w-full rounded-md border border-navy-300 px-3 py-2 text-sm focus:border-mallorca-500 focus:outline-none focus:ring-1 focus:ring-mallorca-500"
                            />
                            {errors.message && (
                              <span className="text-xs text-red-600">
                                Este campo es obligatorio
                              </span>
                            )}
                          </div>
                          <button
                            type="submit"
                            className="w-full rounded-lg bg-mallorca-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-mallorca-700 focus:outline-none focus:ring-2 focus:ring-mallorca-500 focus:ring-offset-2"
                          >
                            Enviar consulta
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal open={open} setOpen={setOpen} />
      </Container>
    </form>
  )
}
