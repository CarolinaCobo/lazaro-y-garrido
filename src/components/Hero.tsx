import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import BackgroundImage from '../images/background.jpeg'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative overflow-hidden  bg-gray-600">
      <div
        className="absolute inset-0 sm:block sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="absolute inset-0">
          <Image
            className="h-full w-full bg-white object-cover opacity-30"
            src={BackgroundImage}
            alt="Foto de la Catedral de Palma de Mallorca"
          />
          <div className="absolute inset-0 mix-blend-multiply" />
        </div>
      </div>
      <Container className="relative py-8 text-center lg:py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            <div className="block">Abogados Lázaro y Garrido</div>
            <div className="relative mt-2 block">
              <span className="relative z-10">Agencia Inmobiliaria</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-1/2 h-[0.4em] w-[60%] -translate-x-1/2 transform fill-mallorca-400"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
            </div>
          </h1>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-sm tracking-tight text-slate-100 sm:text-base md:text-lg">
          Asesoría y asistencia letrada para la defensa y representación en
          procedimientos de orden civil, penal, laboral, administrativo e
          inmobiliario.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm tracking-tight text-slate-100 sm:text-base md:text-lg">
          Con sede en Palma de Mallorca, ofrecemos servicios en todo el
          territorio nacional.
        </p>
        <div className="mt-10 flex justify-center gap-x-6 ">
          <Button
            className="border-2 border-white bg-white text-mallorca-500 hover:bg-mallorca-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="/#servicios"
          >
            Servicios Legales
          </Button>
          <a
            href="https://www.lginmobiliaria.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-lg border-2 border-mallorca-600 bg-mallorca-600 px-4 py-2 text-sm font-semibold text-white hover:bg-mallorca-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mallorca-600"
          >
            Servicios Inmobiliarios
          </a>
        </div>
      </Container>
    </div>
  )
}
