import Head from 'next/head'
import { Header } from '@/components/Header'
import { ContactPage } from '@/components/ContactPage'
import { Footer } from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto - Lázaro & Garrido Abogados</title>
        <meta
          name="description"
          content="Contacta con Lazaro y Garrido, abogados en Palma de Mallorca. No defendemos casos, defendemos personas."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Lázaro & Garrido - Abogados en Palma de Mallorca"
        />
        <meta property="og:image" content="ogimage.png" key="og:image" />
        <meta
          key="og:description"
          property="og:description"
          content="No defendemos casos, defendemos personas. Abogados en Palma de Mallorca y todo el territorio nacional."
        />
        <meta
          key="description"
          property="description"
          content="No defendemos casos, defendemos personas."
        />
        <meta property="og:url" content="http://www.lazarogarrido.com/" />

        <meta
          itemprop="name"
          content="Lázaro & Garrido - Abogados en Palma de Mallorca. Abogados en Palma de Mallorca y todo el territorio nacional."
        />
        <meta
          itemprop="description"
          content="No defendemos casos, defendemos personas. Abogados en Palma de Mallorca y todo el territorio nacional."
        />
        <meta
          itemprop="image"
          content="https://lazaro-y-garrido.vercel.app/ogimage.png"
        />
        <meta property="og:url" content="https://lazaro-y-garrido.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Lázaro & Garrido - Abogados en Palma de Mallorca"
        />
        <meta
          property="og:description"
          content="No defendemos casos, defendemos personas."
        />
        <meta
          property="og:image"
          content="https://lazaro-y-garrido.vercel.app/ogimage.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Lázaro & Garrido - Abogados en Palma de Mallorca"
        />
        <meta
          name="twitter:description"
          content="No defendemos casos, defendemos personas. Abogados en Palma de Mallorca y todo el territorio nacional."
        />
        <meta
          name="twitter:image"
          content="https://lazaro-y-garrido.vercel.app/ogimage.png"
        />
      </Head>
      <Header />
      <Header />
      <ContactPage />
      <Footer />
    </>
  )
}
