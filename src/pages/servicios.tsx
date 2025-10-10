import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServicesHero } from '@/components/ServicesHero'
import { ServicesGrid } from '@/components/ServicesGrid'
import { ServicesCTA } from '@/components/ServicesCTA'

export default function Servicios() {
  return (
    <>
      <Head>
        <title>Servicios - Lázaro & Garrido Abogados</title>
        <meta
          name="description"
          content="Servicios legales especializados: Civil, Penal, Laboral, Administrativo e Inmobiliario. Abogados en Palma de Mallorca."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Servicios - Lázaro & Garrido Abogados"
        />
        <meta property="og:image" content="/ogimage.png" key="og:image" />
        <meta
          key="og:description"
          property="og:description"
          content="Servicios legales especializados: Civil, Penal, Laboral, Administrativo e Inmobiliario. Abogados en Palma de Mallorca."
        />
      </Head>
      <Header />
      <main>
        <ServicesHero title="Nuestros Servicios">
          {{
            mainText: 'No defendemos casos,',
            subText: <span className="italic">defendemos personas.</span>,
          }}
        </ServicesHero>
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  )
}
