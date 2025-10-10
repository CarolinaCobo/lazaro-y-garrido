import Image from 'next/image'
import { Container } from '@/components/Container'

export function RealStateContact() {
  return (
    <div className="bg-mallorca-600">
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
                      <p className="mt-2 text-xs text-gray-600 sm:text-sm">
                        ¿Quieres ser el primero en recibir nuevas propiedades?
                        Con nuestra amplia experiencia en el sector
                        inmobiliario, te ayudamos a encontrar el hogar de tus
                        sueños.
                      </p>
                      <div className="mt-2">
                        <form className="space-y-2">
                          <div>
                            <input
                              type="email"
                              placeholder="Tu email"
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-mallorca-500 focus:outline-none focus:ring-1 focus:ring-mallorca-500"
                            />
                          </div>
                          <div>
                            <input
                              type="tel"
                              placeholder="Tu teléfono"
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-mallorca-500 focus:outline-none focus:ring-1 focus:ring-mallorca-500"
                            />
                          </div>
                          <div>
                            <textarea
                              placeholder="Cuéntanos qué buscas..."
                              rows={3}
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-mallorca-500 focus:outline-none focus:ring-1 focus:ring-mallorca-500"
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full rounded-lg bg-mallorca-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-mallorca-700 focus:outline-none focus:ring-2 focus:ring-mallorca-500 focus:ring-offset-2"
                          >
                            Enviar consulta
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
