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
        <meta name="description" content="" />
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
