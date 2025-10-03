import { Address } from './Address'
import { ContactForm } from './ContactForm'

export function ContactPage() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <ContactForm />
          <Address />
        </div>
      </div>
    </>
  )
}
