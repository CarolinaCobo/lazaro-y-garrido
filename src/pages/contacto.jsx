import Head from 'next/head'
import { Header } from '@/components/Header'
import { ContactPage } from '@/components/ContactPage'
import { Footer } from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto - Lázaro & Garrido</title>
      </Head>
      <Header />
      <ContactPage />
      <Footer />
    </>
  )
}
