import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer>
      <Container>
        <nav className="mt-10 text-sm sm:text-base" aria-label="quick links">
          <div className="mx-auto mt-6 flex-col items-center justify-between py-4 sm:mt-0 sm:flex sm:flex-row">
            <div className="mb-6 sm:mb-0">
              <Link href="/" aria-label="Home">
                <Logo className="mx-auto flex h-10 w-auto" />
              </Link>
            </div>
            <div>
              <Link
                className="inline-block rounded-full py-1 px-2 text-sm text-navy-700 hover:text-mallorca-200 sm:text-base"
                href="/#servicios"
              >
                Servicios
              </Link>
              <Link
                className="inline-block rounded-full py-1 px-2 text-sm text-navy-700 hover:text-mallorca-200 sm:text-base"
                href="/#nuestro-equipo"
              >
                Nuestro equipo
              </Link>
              <Link
                className="inline-block rounded-full py-1 px-2 text-sm text-navy-700 hover:text-mallorca-200 sm:text-base"
                href="https://www.lginmobiliaria.es/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inmobiliaria
              </Link>
              <Link
                className="inline-block rounded-full py-1 px-2 text-sm text-navy-700 hover:text-mallorca-200 sm:text-base"
                href="/#prensa"
              >
                Prensa
              </Link>
              <Link
                className="inline-block rounded-full py-1 px-2 text-sm text-navy-700 hover:text-mallorca-200 sm:text-base"
                href="/contacto"
              >
                Contacto
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex flex-col items-center border-navy-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://es-la.facebook.com/people/L%C3%A1zaro-Garrido-Abogados/100053003869079/"
              className="group"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                aria-hidden="true"
                className="h-8 w-8 fill-navy-500 group-hover:fill-mallorca-700"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-navy-500 sm:mt-0 sm:text-base">
            &copy; {new Date().getFullYear()} Lázaro & Garrido
          </p>
        </div>
      </Container>
    </footer>
  )
}
