import Head from 'next/head'
import { Header } from '@/components/Header'

import { Footer } from '@/components/Footer'
import Posts from '@/components/Posts'

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Lázaro & Garrido</title>
      </Head>
      <Header />
      <Posts posts={posts} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
  const entries = await client.getEntries({ content_type: 'blog' })

  console.log({ entries })
  return {
    props: {
      posts: entries.items,
    },
  }
}
