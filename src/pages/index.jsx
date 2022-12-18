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
        <title>Lázaro & Garrido</title>
        <meta
          name="description"
          content="Abogados en Palma de Mallorca. No defendemos casos, defendemos personas."
        />

        <meta
          key="og:title"
          property="og:title"
          content="Lázaro y Garrido - Abogados en Palma de Mallorca"
        />
        <meta
          key="og:image"
          property="og:image"
          content="src/images/og/logo.png"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Abogados en Mallorca. No defendemos casos, defendemos personas"
        />
        <meta
          key="description"
          property="description"
          content="Abogados en Mallorca. No defendemos casos, defendemos personas"
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
