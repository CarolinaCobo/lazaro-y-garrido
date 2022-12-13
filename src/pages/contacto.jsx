import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto - Lázaro & Garrido</title>
      </Head>
      <Header />
      <AuthLayout>
        <div className="flex flex-col">
          {/* <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link> */}

          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">Contacto</h2>
            <p className="mt-2 text-sm text-gray-700">
              Envíanos tus datos y nos pondremos en contacto contigo lo antes
              posible.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              También puedes escribirnos a{' '}
              <Link
                href="mailto:info@lazarogarrido.com"
                className="font-medium text-mallorca-600 hover:underline"
              >
                info@lazarogarrido.com
              </Link>
            </p>
          </div>
        </div>
        <form
          action="https://formsubmit.co/ccobo.dev@email.com"
          method="POST"
          className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2"
        >
          <TextField
            label="Nombre"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Apellidos"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Dirección de correo electrónico"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            className="col-span-full"
            label="Mensaje"
            id="message"
            name="message"
            type="freetext"
            autoComplete="text"
            required
            rows="20"
          />

          <div className="col-span-full">
            <Button type="submit" className="mt-10 w-full">
              Enviar
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
