import { Address } from './Address'
import { ContactForm } from './ContactForm'

export function ContactPage() {
  return (
    <>
      <div className="bg-white">
        {/* <div className="mx-auto max-w-7xl py-8 px-4 sm:py-4 sm:px-6 lg:px-8"> */}
        <ContactForm />
        <Address />
      </div>
      {/* </div><h1 class="mb-2 text-2xl font-bold uppercase tracking-wide sm:text-2xl lg:text-3xl">Contacta directamente con nuestro equipo</h1> */}
    </>
  )
}
