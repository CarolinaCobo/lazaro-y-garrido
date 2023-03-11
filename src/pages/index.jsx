import Head from 'next/head'
import { CallToAction } from '@/components/CallToAction'
import { Press } from '@/components/Press'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Team } from '@/components/Team'
import { Services } from '@/components/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lázaro & Garrido - Abogados</title>
        <meta
          name="description"
          content="Abogados en Palma de Mallorca. No defendemos casos, defendemos personas."
        />

        <meta
          key="og:title"
          property="og:title"
          content="Lázaro & Garrido - Abogados en Palma de Mallorca"
        />
        <meta property="og:image" content="/ogimage.png" key="og:image" />
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
      </Head>
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <CallToAction />
        <Press />
      </main>
      <Footer />
    </>
  )
}
