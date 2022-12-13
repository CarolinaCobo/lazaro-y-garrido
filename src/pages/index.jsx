import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Press } from '@/components/Press'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Team } from '@/components/Team'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lázaro & Garrido</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Team />
        <CallToAction />
        <Press />
      </main>
      <Footer />
    </>
  )
}
