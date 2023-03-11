import Image from 'next/image'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <Link href="/" className="inline-flex">
            <span className="sr-only">Your Company</span>
            <img className="h-36 w-auto" src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-base font-semibold text-mallorca-600">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Página no encontrada
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Lo sentimos pero no podemos encontrar la página que estás buscando
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="text-base font-medium text-mallorca-600 hover:text-mallorca-100"
              >
                Volver a la página principal
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <Link
            href="/contacto"
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
          >
            Contáctanos
          </Link>
        </nav>
      </footer>
    </div>
  )
}
