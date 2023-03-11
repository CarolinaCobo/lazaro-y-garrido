import Head from 'next/head'
import { Header } from '@/components/Header'
import { ContactPage } from '@/components/ContactPage'
import { Footer } from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto - Lázaro & Garrido</title>
        <meta
          name="description"
          content="Ponte en contacto con Lazaro y Garrido, abogados en Palma de Mallorca"
        />
        <meta
          key="og:title"
          property="og:title"
          content="Contacto - Lázaro & Garrido"
        />
        <meta
          key="og:image"
          property="og:image"
          content="src/images/og/ogimage.png"
        />
        <meta
          key="og:description"
          property="og:description"
          content="No defendemos casos, defendemos personas. Abogados en Palma de Mallorca y todo el territorio nacional"
        />
        <meta
          key="description"
          property="description"
          content="Abogados en Palma de Mallorca. No defendemos casos, defendemos personas."
        />
        <meta property="og:url" content="http://www.lazarogarrido.com/" />
      </Head>
      <Header />
      <Header />
      <ContactPage />
      <Footer />
    </>
  )
}
