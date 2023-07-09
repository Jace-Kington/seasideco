import Head from 'next/head'

import Header from '../components/header'
import Hero from '../components/hero'
import Products from '../components/products'
import Upcoming from '../components/upcoming'
import Gallery from '../components/gallery'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sea Side Co.</title>
        <meta name="description" content="Clothing Brand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      <Hero/>
      <Products/>
      <Upcoming/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  )
}
